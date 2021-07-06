import { Meta, Story } from '@storybook/react'
import MenuLabel from '.'

export default {
  title: 'Elements/MenuLabel',
  component: MenuLabel,
  argTypes: {},
} as Meta

const Template: Story = ({active, label}) => <MenuLabel active={active} label={label}/>

export const MenuLabelTemplate = Template.bind({})

MenuLabelTemplate.parameters = {}
MenuLabelTemplate.args = { active: false, label: 'medium' }