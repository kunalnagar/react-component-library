import React, { useState } from 'react'

import { ReactComponent as PlusIcon } from 'assets/plus.svg'
import { ReactComponent as MinusIcon } from 'assets/minus.svg'

import { Accordion } from '../index'

export default {
  title: 'Accordion',
}

export const Basic = () => {
  const [activeItem, setActiveItem] = useState<number | null>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any, index: number) => {
    if (activeItem === index) {
      setActiveItem(null)
    } else {
      setActiveItem(index)
    }
  }

  return (
    <Accordion style={{ width: '50%' }}>
      <Accordion.Item
        label="Summary 1"
        iconCollapsed={<PlusIcon />}
        iconExpanded={<MinusIcon />}
        isExpanded={activeItem === 0}
        onClick={(e) => handleClick(e, 0)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos vitae
        debitis sapiente similique deserunt tempora velit voluptatem sequi
        eligendi, fugit ex facilis quidem eaque placeat corporis distinctio
        culpa natus.
      </Accordion.Item>
      <Accordion.Item
        label="Summary 2"
        iconCollapsed={<PlusIcon />}
        iconExpanded={<MinusIcon />}
        isExpanded={activeItem === 1}
        onClick={(e) => handleClick(e, 1)}
      >
        Et eos vitae debitis sapiente similique deserunt tempora velit
        voluptatem sequi eligendi, fugit ex facilis quidem eaque placeat
        corporis distinctio culpa natus.
      </Accordion.Item>
    </Accordion>
  )
}
