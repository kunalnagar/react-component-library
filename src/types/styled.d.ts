// eslint-disable-next-line no-restricted-imports
import 'styled-components'
import { TWeight } from '../theme/types'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    colors: {
      danger: { [TKey in TWeight]: string }
      default: string
      primary: { [TKey in TWeight]: string }
      secondary: { [TKey in TWeight]: string }
      success: { [TKey in TWeight]: string }
      warning: { [TKey in TWeight]: string }
    }
  }
}
