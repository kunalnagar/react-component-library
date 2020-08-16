import React, { useState } from 'react'

import { IAccordionProps, IAccordionItemProps } from 'types'

import {
  AccordionStyled,
  AccordionItemTitleStyled,
  AccordionItemContent,
} from './styled'

export const Accordion = ({ children }: IAccordionProps) => {
  return <AccordionStyled>{children}</AccordionStyled>
}

export const AccordionItem = ({
  iconExpanded,
  iconCollapsed,
  isExpanded = false,
  label,
  children,
}: IAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isExpanded)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li>
      <AccordionItemTitleStyled
        aria-expanded={isOpen ? true : false}
        onClick={handleClick}
      >
        {isOpen ? iconExpanded : iconCollapsed}
        {label}
      </AccordionItemTitleStyled>
      {isOpen && <AccordionItemContent>{children}</AccordionItemContent>}
    </li>
  )
}

Accordion.Item = AccordionItem
Accordion.ItemContent = AccordionItemContent
