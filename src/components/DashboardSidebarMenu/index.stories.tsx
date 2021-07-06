import { Meta, Story } from '@storybook/react'
import SidebarMenu from '.'

export default {
  title: 'Component/SidebarMenu',
  component: SidebarMenu,
  argTypes: {},
} as Meta

const Template: Story = ({ limit, props }) => <SidebarMenu limit={limit} {...props} />

export const SidebarMenuTemplate = Template.bind({})

SidebarMenuTemplate.parameters = {}
SidebarMenuTemplate.args = {}
