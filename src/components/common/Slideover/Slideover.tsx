import { Dispatch, Fragment, FC, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Close } from '@components/icons'
import s from './Slideover.module.css'
import navbarLinks from '@config/navbarLinks.json'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface SlideoverProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  locale: string
}

const Slideover: FC<SlideoverProps> = ({ open, setOpen, locale }) => {
  const handleClose = () => setOpen(false)

  const t = useTranslations('Navbar')

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className={s.dialog}
        open={open}
        onClose={setOpen}
      >
        <div className={s['outside-wrapper']}>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={s.overlay} />
          </Transition.Child>

          <div className={s['inside-wrapper']}>
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className={s['content-wrapper']}>
                <button onClick={handleClose} className={s['close-button']}>
                  <Close className={s['close-icon']} />
                </button>
                <nav>
                  <ul className={s.nav}>
                    {navbarLinks.map((link, i) => (
                      <li key={link}>
                        <a className={s['nav-item']} href={link}>
                          {t(String(i))}
                        </a>
                      </li>
                    ))}
                    <li>
                      <Link href={`/`} locale={locale === 'en' ? 'fr' : 'en'}>
                        <a className={s['nav-item']}>
                          {t(String(navbarLinks.length))}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Slideover
