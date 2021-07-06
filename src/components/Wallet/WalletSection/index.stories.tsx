import { Meta, Story } from '@storybook/react'
import WalletSection from '.'

export default {
  title: 'Component/WalletSection',
  component: WalletSection,
  argTypes: {},
} as Meta

const Template: Story = () => <WalletSection />

export const WalletSectionTemplate = Template.bind({})

WalletSectionTemplate.parameters = {}
WalletSectionTemplate.args = {}
