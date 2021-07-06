import { Meta, Story } from '@storybook/react'
import Notification from '.'

export default {
  title: 'Elements/Notification',
  component: Notification,
  argTypes: {},
} as Meta

const Template: Story = ({active, message}) => <Notification active={active} message={message}/>

export const NotificationTemplate = Template.bind({})

NotificationTemplate.parameters = {}
NotificationTemplate.args = { active: false, message: 'You are logged out' }