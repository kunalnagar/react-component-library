import { colors } from './colors'
import { spacing } from './spacing'
import { breakpoint } from './breakpoint'
import { DefaultTheme } from 'styled-components/macro'

export const theme = {
  breakpoint,
  colors,
  spacing,
}

export const themeLight: DefaultTheme = {
  colors: {
    black: colors.black,
    danger: colors.red,
    default: colors.white,
    primary: colors.blue,
    secondary: colors.gray,
    success: colors.green,
    warning: colors.orange,
  },
}
