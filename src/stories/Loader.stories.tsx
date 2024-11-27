import React from 'react'
import { CircularProgress, CircularProgressProps } from '@mui/material'
import { Meta, StoryFn as Story } from '@storybook/react'

export default {
  title: 'Components/Loader', // Storybook category
  component: CircularProgress, // Component to document
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'], // MUI loader colors
    },
    size: {
      control: { type: 'number' },
    },
    thickness: {
      control: { type: 'number' },
    },
  },
} as Meta

const Template: Story<CircularProgressProps> = (args) => <CircularProgress {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  size: 40,
  thickness: 3.6,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 60,
  thickness: 4,
}
