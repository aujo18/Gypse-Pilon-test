import React, { FC } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import s from './Hero.module.css'
import config from '@config/index.json'
import { useTranslations } from 'next-intl'

const Hero: FC = () => {
  const t = useTranslations('Hero')

  return (
    <div className={s.root}>
      <Parallax
        className={s.parallax}
        styleInner={{ height: '100%' }}
        y={[-20, 20]}
      >
        <Image
          objectFit="cover"
          layout="fill"
          objectPosition="center center"
          src={`/assets/${config.heroImage.filename}`}
          alt={config.heroImage.alt}
        />
      </Parallax>

      <div className={s['cta-root']}>
        <div className={s['cta-wrapper']}>
          <h1 className={s['cta-title']}>{t('title')}</h1>
          <h2 className={s['cta-subtitle']}>{t('subtitle')}</h2>
          <button
            onClick={() =>
              document.getElementById('contact-us')?.scrollIntoView()
            }
            className={s['cta-button']}
          >
            {t('button')}
          </button>
        </div>
      </div>

      <div className={s['bottom-gradient']} />
    </div>
  )
}

export default Hero
