import { Container } from '@components/ui'
import React from 'react'
import { useTranslations } from 'next-intl'
import s from './Partners.module.css'
import config from '@config/index.json'
import Image from 'next/image'

function Partners() {
  const t = useTranslations('Partners')

  return (
    <div id="products" className="bg-white pb-16">
      <Container>
        <h2 className="section-title">{t('title')}</h2>
        <p className={s.description}>{t('description')}</p>
        <div className={s['logos-wrapper']}>
          {config.partners.map((partner) => (
            <div key={partner.name}>
              <Image
                src={`/assets/partner-logos/${partner['logo-filname']}`}
                alt={partner.name}
                width={400}
                height={200}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Partners
