import React, { FC } from 'react'
import s from './FixedSocials.module.css'
import fixedSocials from '@config/fixedSocials'

const FixedSocials: FC = () => {
  return (
    <div className={s.root}>
      {fixedSocials.map(({ Icon, socialName, href }) => (
        <div key={socialName} className={s.social}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className={s.icon} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default FixedSocials
