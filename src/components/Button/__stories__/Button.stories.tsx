import { select, text } from '@storybook/addon-knobs'
import React from 'react'

import { ESize, EVariant } from 'theme/enums'

import { Button } from '..'

export default {
  title: 'Atoms/Button',
}

const sizes: { [key: string]: number } = {}

for (const item in ESize) {
  if (!isNaN(parseInt(item))) {
    sizes[ESize[item]] = parseInt(item)
  }
}

export const Basic = () => {
  return (
    <Button
      label={text('label', 'Sample aria label text')}
      size={select('size', sizes, ESize.md)}
      variant={select('variant', EVariant, EVariant.default)}
    >
      Button
    </Button>
  )
}
