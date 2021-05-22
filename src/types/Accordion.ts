export type IAccordionProps = React.HTMLProps<HTMLUListElement>

export interface IAccordionItemProps extends React.HTMLProps<HTMLLIElement> {
  isExpanded?: boolean
  iconExpanded?: JSX.Element
  iconCollapsed?: JSX.Element
}
