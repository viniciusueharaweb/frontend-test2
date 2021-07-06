import { Meta, Story } from '@storybook/react'
import RegistrationSection from '.'

export default {
  title: 'Component/RegistrationSection',
  component: RegistrationSection,
  argTypes: {},
} as Meta

const Template: Story = ({setCompanyName}) => <RegistrationSection setCompanyName={setCompanyName}/>

export const RegistrationSectionTemplate = Template.bind({})

RegistrationSectionTemplate.parameters = {}
RegistrationSectionTemplate.args = {}
