import { Meta, Story } from '@storybook/react'
import WalletMenu from '.'

export default {
  title: 'Component/WalletMenu',
  component: WalletMenu,
  argTypes: {},
} as Meta

const Template: Story = ({ ...args }) => <WalletMenu {...args} />

export const WalletMenuTemplate = Template.bind({})

WalletMenuTemplate.parameters = {}
WalletMenuTemplate.args = {}
