import { EVariant } from '../theme/enums'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: EVariant
}
