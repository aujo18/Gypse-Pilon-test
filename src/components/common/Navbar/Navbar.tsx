import { FC, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { Container } from '@components/ui'
import { Menu, Phone } from '@components/icons'
import Image from 'next/image'
import navbarLinks from '@config/navbarLinks.json'
import config from '@config/index.json'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

const Slideover = dynamic(() => import('@components/common/Slideover'))

interface NavbarProps {
  locale: string
}

const Navbar: FC<NavbarProps> = ({ locale }) => {
  const [isSlideoverOpen, setIsSlideoverOpen] = useState(false)

  const t = useTranslations('Navbar')

  const handleOpenSlideover = () => setIsSlideoverOpen(true)

  return (
    <header className={s.root}>
      <div className="bg-primary">
        <Container className="py-2">
          <div className={s['phone-wrapper']}>
            <Phone className={s['phone-icon']} />{' '}
            <a href={`tel:${config.contacts.phone}`}>{config.contacts.phone}</a>
          </div>
        </Container>
      </div>

      <Container>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <Image
              height={config.logo.height}
              width={config.logo.width}
              src={`/assets/${config.logo.fileName}`}
              alt="logo"
            />
          </div>
          <nav className={s['nav-wrapper']}>
            <ul className={s.nav}>
              {navbarLinks.map((link, i) => (
                <li key={link}>
                  <a className={s['nav-link']} href={link}>
                    {t(String(i))}
                  </a>
                </li>
              ))}
              <li>
                <Link href={`/`} locale={locale === 'en' ? 'fr' : 'en'}>
                  <a className={s['nav-link']}>
                    {t(String(navbarLinks.length))}
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <button onClick={handleOpenSlideover} className={s['sidebar-button']}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </Container>
      <Slideover
        open={isSlideoverOpen}
        setOpen={setIsSlideoverOpen}
        locale={locale}
      />
    </header>
  )
}

export default Navbar
