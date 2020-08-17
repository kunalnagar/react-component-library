import React, { useState } from 'react'

import { ReactComponent as PlusIcon } from 'assets/plus.svg'
import { ReactComponent as MinusIcon } from 'assets/minus.svg'

import { Accordion } from '../index'

export default {
  title: 'Atoms/Accordion',
}

export const Basic = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <Accordion>
      <Accordion.Item
        label="Summary 1"
        iconCollapsed={<PlusIcon />}
        iconExpanded={<MinusIcon />}
        isExpanded={activeItem === 0}
        onClick={() => setActiveItem(0)}
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
        onClick={() => setActiveItem(1)}
      >
        Et eos vitae debitis sapiente similique deserunt tempora velit
        voluptatem sequi eligendi, fugit ex facilis quidem eaque placeat
        corporis distinctio culpa natus.
      </Accordion.Item>
    </Accordion>
  )
}
