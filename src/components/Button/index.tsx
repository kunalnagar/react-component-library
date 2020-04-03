import styled, { css } from 'styled-components/macro'
import { ESize, EVariant } from '../../theme/enums'
import { IButtonProps } from '../../types/Button'

const setBaseStyles = css`
  cursor: pointer;
  border-radius: 0.25rem;
  background: none;
  appearance: none;
`

const setButtonVariant = (variant: EVariant) => css`
  border-color: ${(props) => props.theme.colors[variant][700]};
  color: ${(props) =>
    variant === EVariant.default
      ? props.theme.colors.black
      : props.theme.colors.default};
  background-color: ${(props) =>
    variant === EVariant.default
      ? props.theme.colors.white
      : props.theme.colors[variant][600]};

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) =>
      variant === EVariant.default
        ? props.theme.colors.secondary[300]
        : props.theme.colors[variant][700]};
  }

  &:active {
    border-width: 2px;
  }
`

const setButtonSize = (size: ESize) => {
  switch (size) {
    case ESize.xs:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[1]} ${props.theme.spacing[2]}`};
        font-size: 1rem;
      `
    case ESize.sm:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
        font-size: 1rem;
      `
    case ESize.md:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
        font-size: 1.5rem;
      `
    case ESize.lg:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[3]} ${props.theme.spacing[5]}`};
        font-size: 1.8rem;
      `
    case ESize.xl:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[4]} ${props.theme.spacing[6]}`};
        font-size: 2rem;
      `
    case ESize.xxl:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[5]} ${props.theme.spacing[8]}`};
        font-size: 2.2rem;
      `
    default:
      return css`
        padding: ${(props) =>
          `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
        font-size: 1.5rem;
      `
  }
}

export const Button = styled.button<IButtonProps>`
  ${setBaseStyles}
  ${(props) =>
    setButtonVariant(
      typeof props.variant === 'undefined' ? EVariant.default : props.variant
    )}
  ${(props) =>
    setButtonSize(typeof props.size === 'undefined' ? ESize.md : props.size)}
`
