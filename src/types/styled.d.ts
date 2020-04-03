// eslint-disable-next-line no-restricted-imports
import 'styled-components'
import { TWeight } from '../theme/types'
import { ISpacing } from '../theme/spacing'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    colors: {
      black: string
      danger: { [TKey in TWeight]: string }
      default: string
      primary: { [TKey in TWeight]: string }
      secondary: { [TKey in TWeight]: string }
      success: { [TKey in TWeight]: string }
      warning: { [TKey in TWeight]: string }
      white: string
    }
    spacing: ISpacing
  }
}
