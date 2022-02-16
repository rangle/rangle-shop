import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DsButton, DsButtonProps } from './button';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Button',
  viewMode: 'docs',
  parameters: {
    badges: [BADGE.BETA],
  },
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    },
  },
  component: DsButton,
} as Meta;

const Template: Story<DsButtonProps> = (args) => <DsButton {...args}>Hello Button</DsButton>;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary'
};


export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Disabled: Story<DsButtonProps> = (args) => <DsButton disabled {...args}>Hello Button</DsButton>;
Secondary.args = {
  variant: 'primary'
};