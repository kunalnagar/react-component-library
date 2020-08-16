import styled from 'styled-components'

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

export const AccordionItemContent = styled.div`
  margin-left: 1rem;
`
