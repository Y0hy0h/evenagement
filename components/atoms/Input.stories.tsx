import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {}
} as Meta

const Template: Story<any> = (args: any) => {
  const [value, setValue] = useState(args.value)
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Text',
  placeholder: 'Placeholder'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'Placeholder'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Placeholder'
}
