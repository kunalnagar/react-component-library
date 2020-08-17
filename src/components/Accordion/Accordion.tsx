import React from 'react'

import { IAccordionProps, IAccordionItemProps } from 'types'

import {
  AccordionStyled,
  AccordionItemTitleStyled,
  AccordionItemContentStyled,
} from './styled'

const AccordionItem = ({
  iconExpanded,
  iconCollapsed,
  isExpanded = false,
  label,
  children,
  ...rest
}: IAccordionItemProps) => {
  return (
    <li {...rest}>
      <AccordionItemTitleStyled aria-expanded={isExpanded ? true : false}>
        {isExpanded ? iconExpanded : iconCollapsed}
        {label}
      </AccordionItemTitleStyled>
      <AccordionItemContentStyled isExpanded={isExpanded}>
        {children}
      </AccordionItemContentStyled>
    </li>
  )
}

export const Accordion = ({ children }: IAccordionProps) => {
  return <AccordionStyled>{children}</AccordionStyled>
}

Accordion.Item = AccordionItem
