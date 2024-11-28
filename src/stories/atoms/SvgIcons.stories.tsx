import React from 'react';
import { Meta, StoryFn as Story } from '@storybook/react';
import LogoIcon from 'dls/atoms/Icons/svgs/LogoIcon';
import { SVGProps } from 'dls/atoms/Icons/Generator/svg';

export default {
  title: 'atoms/Icons/LogoIcon',
  component: LogoIcon,
  argTypes: {
    // You can add controls for props here if needed
    className: { control: 'text', description: 'CSS class for the SVG icon' },
    style: { control: 'object', description: 'Inline styles for the SVG icon' },
  },
} as Meta;

const Template: Story<SVGProps> = (args) => <LogoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
};
