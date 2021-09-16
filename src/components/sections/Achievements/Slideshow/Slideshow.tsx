import React, { Dispatch, FC, Fragment, SetStateAction, useState } from 'react'
import Flickity, { FlickityOptions } from 'react-flickity-component'
import Image from 'next/image'
import config from '@config/index.json'
import s from './Slideshow.module.css'
import { Close, Expand } from '@components/icons'
import { Dialog, Transition } from '@headlessui/react'

const opts: FlickityOptions = {
  pageDots: false,
  contain: true,
}

const Slideshow: FC = () => {
  let [openImage, setOpenImage] = useState({
    isOpen: false,
    filename: '',
    title: '',
  })

  return (
    <>
      <FullImage openImage={openImage} setOpenImage={setOpenImage} />
      <Flickity options={opts}>
        {config.achievements.photosSlideshow.map((photo) => (
          <Slide
            setOpenImage={setOpenImage}
            key={photo.filename}
            photo={photo}
          />
        ))}
      </Flickity>
    </>
  )
}

interface SlideProps {
  photo: {
    filename: string
    title: string
  }
  setOpenImage: Dispatch<
    SetStateAction<{ isOpen: boolean; filename: string; title: string }>
  >
}

const Slide: FC<SlideProps> = ({ photo, setOpenImage }) => {
  const handleOpenImage = () => {
    console.log('ss')
    setOpenImage({
      isOpen: true,
      ...photo,
    })
  }

  return (
    <button onClick={handleOpenImage} title={photo.title} className={s.slide}>
      <Image
        alt={photo.title}
        src={`/assets/achievements-slideshow/${photo.filename}`}
        layout="fill"
        objectFit="cover"
      />
      <div className={s['slide-overlay']}>
        <div className={s['slide-icon-wrapper']}>
          <Expand className={s['slide-icon']} />
        </div>
        <div className={s['slide-title']}>{photo.title}</div>
      </div>
    </button>
  )
}

interface FullImage {
  openImage: { isOpen: boolean; filename: string; title: string }
  setOpenImage: Dispatch<
    SetStateAction<{ isOpen: boolean; filename: string; title: string }>
  >
}

const FullImage: FC<FullImage> = ({ openImage, setOpenImage }) => {
  const handleClose = () => setOpenImage((prev) => ({ ...prev, isOpen: false }))

  return (
    <Transition.Root show={openImage.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="min-h-screen pt-4 pb-20 text-center block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block align-middle h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block relative overflow-hidden transform transition-all align-middle">
              <Image
                alt={openImage.title}
                height={800}
                width={800}
                src={`/assets/achievements-slideshow/${openImage.filename}`}
              />
              <button className="absolute top-4 right-4">
                <div className="sr-only">Close</div>
                <Close onClick={handleClose} className="w-8 h-8 text-white" />
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Slideshow
