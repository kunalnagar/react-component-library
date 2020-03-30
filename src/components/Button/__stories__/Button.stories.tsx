import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Button,
  ButtonDanger,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSuccess,
  ButtonWarning,
} from '../../Button'

storiesOf('Atoms|Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Primary', () => <ButtonPrimary>Primary</ButtonPrimary>)
  .add('Secondary', () => <ButtonSecondary>Secondary</ButtonSecondary>)
  .add('Success', () => <ButtonSuccess>Success</ButtonSuccess>)
  .add('Danger', () => <ButtonDanger>Danger</ButtonDanger>)
  .add('Warning', () => <ButtonWarning>Warning</ButtonWarning>)
