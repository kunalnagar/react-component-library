import styled, { css } from 'styled-components/macro'
import { EVariant } from '../../theme/enums'
import { IButtonProps } from '../../types/Button'

export const Button = styled.button<IButtonProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  background: none;
  appearance: none;

  ${(props) => setButtonVariant(props.variant)}
`

const setButtonVariant = (variant: EVariant) => css<IButtonProps>`
  border-color: ${(props) => props.theme.colors[variant][700]};
  color: ${(props) =>
    variant === EVariant.default
      ? props.theme.colors.black
      : props.theme.colors.default};
  background-color: ${(props) => props.theme.colors[variant][600]};

  &:hover {
    background-color: ${(props) => props.theme.colors[variant][700]};
  }
`
