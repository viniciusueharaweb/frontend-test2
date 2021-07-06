import { Meta, Story } from '@storybook/react'
import Search from '.'

export default {
  title: 'Elements/Search',
  component: Search,
  argTypes: {},
} as Meta

const Template: Story = () => (
  <Search/>
)

export const SearchTemplate = Template.bind({})

SearchTemplate.parameters = {}
SearchTemplate.args = { firstCurrentItem: 1,
  lastCurrentItem: 20,
  totalItems: 20}
