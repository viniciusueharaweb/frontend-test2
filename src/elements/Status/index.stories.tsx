import { Meta, Story } from '@storybook/react'
import Status from '.'

export default {
  title: 'Elements/Status',
  component: Status,
  argTypes: {},
} as Meta

const Template: Story = ({ label }) => <Status label={label} />

export const StatusTemplate = Template.bind({})

StatusTemplate.parameters = {}
StatusTemplate.args = { label: 'VENCIDO' }
