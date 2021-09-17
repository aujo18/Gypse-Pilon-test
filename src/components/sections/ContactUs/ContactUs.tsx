import { Container } from '@components/ui'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'
import config from '@config/index.json'
import s from './ContactUs.module.css'
const ContactUs: FC = () => {
  const t = useTranslations('ContactUs')
  const { contacts } = config

  return (
    <div id="contact-us" className={s.root}>
      <Container>
        <h2 className="section-title">{t('title')}</h2>
        <div>
          <p className={s.presentation}>{t('presentation')}</p>
          <h3 className={s['contact-title']}>{t('contactTitle')}</h3>

          <ul>
            {contacts?.address && <li>{contacts.address}</li>}
            {contacts?.phone && (
              <li>
                <span className="font-semibold">{t('phoneLabel')}: </span>
                {contacts.phone}
              </li>
            )}
            {contacts?.mobile && (
              <li>
                <span className="font-semibold">{t('mobileLabel')}: </span>
                {contacts.mobile}
              </li>
            )}
            {contacts?.email && (
              <li>
                <span className="font-semibold">{t('emailLabel')}: </span>
                {contacts.email}
              </li>
            )}
            {contacts?.fax && (
              <li>
                <span className="font-semibold">{t('faxLabel')}: </span>
                {contacts.fax}
              </li>
            )}
             {contacts?.additional && (
              <li>
                {contacts.additional}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
