import { ESize, EVariant } from 'theme/enums'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** This value gets assigned to the aria-label */
  label: string
  variant?: EVariant
  size?: ESize
}
