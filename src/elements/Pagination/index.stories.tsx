import { Meta, Story } from '@storybook/react'
import Pagination from '.'

export default {
  title: 'Elements/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta

const Template: Story = ({ firstCurrentItem, lastCurrentItem, totalItems }) => (
  <Pagination
    firstCurrentItem={firstCurrentItem}
    lastCurrentItem={lastCurrentItem}
    totalItems={totalItems}
  />
)

export const PaginationTemplate = Template.bind({})

PaginationTemplate.parameters = {}
PaginationTemplate.args = { firstCurrentItem: 1,
  lastCurrentItem: 20,
  totalItems: 20}
