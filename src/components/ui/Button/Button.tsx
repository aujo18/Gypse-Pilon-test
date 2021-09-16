import React, { forwardRef } from 'react'
import s from './Button.module.css'
import cn from 'classnames'

import { ButtonProps } from './Button.d'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
  props,
  buttonRef
) {
  const { className, type, children, actionType, ...rest } = props

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: !actionType || actionType === 'primary',
      [s.secondary]: actionType === 'secondary',
      [s.tertiary]: actionType === 'tertiary',
      [s.disabled]: rest.disabled,
    },
    className
  )

  return (
    <button
      ref={buttonRef}
      type={type || 'button'}
      className={`${rootClassName}`}
      {...rest}
    >
      {children}
    </button>
  )
})

export default Button
