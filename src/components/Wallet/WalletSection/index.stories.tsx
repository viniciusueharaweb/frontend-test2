import { Meta, Story } from '@storybook/react'
import WalletSection from '.'

export default {
  title: 'Component/WalletSection',
  component: WalletSection,
  argTypes: {},
} as Meta

const Template: Story = (...args) => <WalletSection/>

export const WalletSectionTemplate = Template.bind({})

WalletSectionTemplate.parameters = {}
WalletSectionTemplate.args = { limit: '10' }