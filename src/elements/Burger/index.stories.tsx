import { Meta, Story } from '@storybook/react'
import Burger from '.'

export default {
  title: 'Elements/Burger',
  component: Burger,
  argTypes: {},
} as Meta

const Template: Story = ({ args, open, setOpen }) => (
  <Burger {...args} open={open} setOpen={setOpen} />
)

export const BurgerTemplate = Template.bind({})

BurgerTemplate.parameters = {}
BurgerTemplate.args = {}
