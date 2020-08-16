import { storiesOf } from '@storybook/react'
import React from 'react'
import { select, text } from '@storybook/addon-knobs'

import { ESize, EVariant } from 'theme/enums'

import { Button } from '..'

const sizes: any = {}

for (const item in ESize) {
  if (!isNaN(parseInt(item))) {
    sizes[ESize[item]] = parseInt(item)
  }
}

storiesOf('Atoms|Button', module).add('Button', () => (
  <Button
    label={text('label', 'Sample aria label text')}
    size={select('size', sizes, ESize.md)}
    variant={select('variant', EVariant, EVariant.default)}
  >
    Button
  </Button>
))
