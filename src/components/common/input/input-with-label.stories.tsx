import { Meta, StoryObj } from '@storybook/react';

import InputWithLabel from './input-with-label';

const meta: Meta<typeof InputWithLabel> = {
  title: 'Components/Common/InputWithLabel',
  component: InputWithLabel,
  argTypes: {
    type: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Primary: Story = {
  args: {
    type: 'text',
    label: 'Your Name',
    placeholder: 'Enter your name',
  },
};
