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
    requirement: {
      re: {
        control: { type: 'text' },
      },
      errorMessage: {
        control: { type: 'text' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Primary: Story = {
  args: {
    type: 'text',
    label: '이름',
    placeholder: '이름을 입력해주세요.',
    requirement: { re: /.{1,}/.source, errorMessage: '이름을 입력해주세요.' },
  },
};
