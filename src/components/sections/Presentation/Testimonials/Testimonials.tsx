import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import s from './Testimonials.module.css'

import config from '@config/index.json'

import Flickity, { FlickityOptions } from 'react-flickity-component'
import 'flickity/css/flickity.css'
import User from '@components/icons/User'

const numTestimonials = new Array(config.testimonials.num).fill('')

const opts: FlickityOptions = {
  prevNextButtons: false,
  autoPlay: true,
}

const Testimonials: FC = () => {
  const t = useTranslations('Testimonials')

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{t('title')}</h3>
      <div>
        <Flickity options={opts}>
          {numTestimonials.map((_, i) => (
            <Testimonial key={i} index={i} />
          ))}
        </Flickity>
      </div>
    </div>
  )
}

const Testimonial: FC<{ index: number }> = ({ index }) => {
  const t = useTranslations('Testimonials')
  return (
    <div className="w-full">
      <p className={s['testimonial-text']}>{t(String(index))}</p>
      <div className={s['testimonial-author-wrapper']}>
        <User className={s['testimonial-icon']} />
        <p className={s['testimonial-author']}>{t(`${index}-author`)}</p>
      </div>
    </div>
  )
}

export default Testimonials
