import { Meta, Story } from '@storybook/react'
import RegistrationData from '.'

export default {
  title: 'Component/RegistrationData',
  component: RegistrationData,
  argTypes: {},
} as Meta

const Template: Story = ({setCompanyName}) => <RegistrationData setCompanyName={setCompanyName}/>

export const RegistrationDataTemplate = Template.bind({})

RegistrationDataTemplate.parameters = {}
RegistrationDataTemplate.args = {}