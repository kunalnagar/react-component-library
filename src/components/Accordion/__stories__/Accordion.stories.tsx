import React from 'react'

import { ReactComponent as PlusIcon } from 'assets/plus.svg'
import { ReactComponent as MinusIcon } from 'assets/minus.svg'

import { Accordion } from '../index'

export default {
  title: 'Atoms/Accordion',
}

export const Basic = () => {
  return (
    <Accordion>
      <Accordion.Item
        label="Summary 1"
        iconCollapsed={<PlusIcon />}
        iconExpanded={<MinusIcon />}
      >
        <Accordion.ItemContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos vitae
          debitis sapiente similique deserunt tempora velit voluptatem sequi
          eligendi, fugit ex facilis quidem eaque placeat corporis distinctio
          culpa natus.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item
        label="Summary 2"
        iconCollapsed={<PlusIcon />}
        iconExpanded={<MinusIcon />}
      >
        <Accordion.ItemContent>
          Et eos vitae debitis sapiente similique deserunt tempora velit
          voluptatem sequi eligendi, fugit ex facilis quidem eaque placeat
          corporis distinctio culpa natus.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion>
  )
}
