import styled from 'styled-components'

import { IAccordionItemProps } from 'types'

export const AccordionStyled = styled.ul`
  padding-left: 0;
`

export const AccordionItemTitleStyled = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }
`

export const AccordionItemContentStyled = styled.div(
  ({ isExpanded }: Pick<IAccordionItemProps, 'isExpanded'>) => `
  margin-left: 1.7rem;
  display: ${isExpanded ? 'block' : 'none'}
`,
)
