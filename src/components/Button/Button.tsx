import React from 'react'

import { IButtonProps } from 'types/Button'

import { ButtonBase } from './styled'

export const Button = ({ label, children, ...rest }: IButtonProps) => (
  <ButtonBase aria-label={label} {...rest}>
    {children}
  </ButtonBase>
)
