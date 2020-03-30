import React from 'react'
import styled, { css } from 'styled-components/macro'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = styled.button<IButtonProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  background: none;
  background-color: ${(props) => props.theme.colors.default};
  appearance: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary[200]};
  }
`

const setButtonStyle = (variant: any) => css`
  border-color: ${variant[700]};
  color: ${(props) => props.theme.colors.default};
  background-color: ${variant[600]};

  &:hover {
    background-color: ${variant[700]};
  }
`

export const ButtonPrimary = styled(Button)`
  ${(props) => setButtonStyle(props.theme.colors.primary)}
`

export const ButtonSecondary = styled(Button)`
  ${(props) => setButtonStyle(props.theme.colors.secondary)}
`

export const ButtonSuccess = styled(Button)`
  ${(props) => setButtonStyle(props.theme.colors.success)}
`

export const ButtonDanger = styled(Button)`
  ${(props) => setButtonStyle(props.theme.colors.danger)}
`
export const ButtonWarning = styled(Button)`
  ${(props) => setButtonStyle(props.theme.colors.warning)}
`
