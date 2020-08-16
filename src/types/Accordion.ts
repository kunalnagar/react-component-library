export interface IAccordionProps extends React.HTMLProps<HTMLUListElement> {}

export interface IAccordionItemProps extends React.HTMLProps<HTMLLIElement> {
  isExpanded?: boolean
  iconExpanded?: JSX.Element
  iconCollapsed?: JSX.Element
}
