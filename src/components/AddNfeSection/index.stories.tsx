import { Meta, Story } from '@storybook/react'
import AddNfe from '.'

export default {
  title: 'Component/AddNfe',
  component: AddNfe,
  argTypes: {},
} as Meta

const Template: Story = ({ ...args }) => <AddNfe {...args} />

export const AddNfeTemplate = Template.bind({})

AddNfeTemplate.parameters = {}
AddNfeTemplate.args = {}
