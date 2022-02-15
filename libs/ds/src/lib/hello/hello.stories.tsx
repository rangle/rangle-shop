import { Story, Meta } from '@storybook/react';
import { DsHello, DsHelloProps } from './hello';

export default {
  component: DsHello,
  title: 'Components/Hello',
} as Meta;

const Template: Story<DsHelloProps> = (args) => <DsHello {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  title: 'Hello There'
};
