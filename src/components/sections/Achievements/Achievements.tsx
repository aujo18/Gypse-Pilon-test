import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import s from './Achievements.module.css'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import config from '@config/index.json'
import { Container } from '@components/ui'
import Slideshow from './Slideshow'

const Achievements: FC = () => {
  const t = useTranslations('Achievements')
  return (
    <div id="achievements" className={s.root}>
      <Parallax
        className={s.parallax}
        styleInner={{ height: '800px' }}
        y={[-20, 20]}
      >
        <div className={s['image-wrapper']}>
          <Image
            objectFit="cover"
            layout="fill"
            objectPosition="center center"
            src={`/assets/${config.achievements.backgroundFilename}`}
            alt="section background"
          />
          <div className={s.overlay} />
        </div>
      </Parallax>

      <Container>
        <h2 className="text-white section-title">{t('title')}</h2>
        <Slideshow />
        <p className={s.paragraph}>{t('paragraph')}</p>
      </Container>
    </div>
  )
}

export default Achievements
