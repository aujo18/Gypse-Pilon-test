import { FC } from 'react'
import cn from 'classnames'
import s from './Footer.module.css'
import { Container } from '@components/ui'
import { useTranslations } from 'next-intl'

const Footer: FC = () => {
  const t = useTranslations('Footer')

  return (
    <footer className={s.root}>
      <Container>
        <p className={s.text}>{t('text')}</p>
      </Container>
    </footer>
  )
}

export default Footer
