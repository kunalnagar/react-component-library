import { storiesOf } from '@storybook/react'
import React from 'react'
import { EVariant } from '../../../theme/enums'
import { Button } from '../../Button'

storiesOf('Atoms|Button', module)
  .add('Default', () => <Button variant={EVariant.default}>Default</Button>)
  .add('Primary', () => <Button variant={EVariant.primary}>Primary</Button>)
  .add('Secondary', () => (
    <Button variant={EVariant.secondary}>Secondary</Button>
  ))
  .add('Success', () => <Button variant={EVariant.success}>Success</Button>)
  .add('Danger', () => <Button variant={EVariant.danger}>Danger</Button>)
  .add('Warning', () => <Button variant={EVariant.warning}>Warning</Button>)
