import { Meta, Story } from '@storybook/react'
import { MyForm } from '.'

export default {
  title: 'Component/MyForm',
  component: MyForm,
  argTypes: {},
} as Meta

const Template: Story = ({ setCompanyName}) => <MyForm setCompanyName={setCompanyName} />

export const MyFormTemplate = Template.bind({})

MyFormTemplate.parameters = {}
MyFormTemplate.args = {}
