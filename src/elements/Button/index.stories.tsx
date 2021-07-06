import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story = ({...args}) => <Button {...args}/>

export const ButtonTemplate = Template.bind({})

ButtonTemplate.parameters = {}
ButtonTemplate.args = { label: 'test', size: 'medium', dashboard: false }