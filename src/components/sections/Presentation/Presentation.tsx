import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import s from './Presentation.module.css'
import { Container } from '@components/ui'
import config from '@config/index.json'
import Image from 'next/image'
import Testimonials from './Testimonials'

const Presentation: FC = () => {
  const t = useTranslations('Presentation')

  return (
    <div id="about-us" className="bg-white">
      <Container className={s.container}>
        <h2 className="section-title">{t('title')}</h2>
        <div className={s.wrapper}>
          <article className={s['article-wrapper']}>
            <h2 className={s['article-title']}>{t('articleTitle')}</h2>
            <p className={s.article}>{t('article')}</p>
          </article>
          <div className={s.image}>
            <Image
              width={800}
              height={560}
              src={`/assets/${config.presentationImage.filename}`}
              alt={config.presentationImage.alt}
            />
            <Testimonials />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Presentation
