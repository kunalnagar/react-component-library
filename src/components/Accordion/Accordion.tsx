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
}: IAccordionItemProps) => (
  <li {...rest}>
    <h3>
      <AccordionItemTitleStyled aria-expanded={!!isExpanded}>
        {isExpanded ? iconExpanded : iconCollapsed}
        {label}
      </AccordionItemTitleStyled>
    </h3>
    <AccordionItemContentStyled isExpanded={isExpanded}>
      {children}
    </AccordionItemContentStyled>
  </li>
)

export const Accordion = ({ children, style }: IAccordionProps) => (
  <AccordionStyled style={style}>{children}</AccordionStyled>
)

Accordion.Item = AccordionItem
