import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './index';

const meta: Meta = {
  title: 'common/button/button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    className: {
      description: '클래스네임, 길이 (btn-filled, btn-outlined, btn-disabled)',
      control: 'text',
    },
    children: {
      description: '버튼 내부에 들어가는 콘텐츠',
      control: 'text',
    },
    onClick: {
      description: '버튼 클릭 시 실행되는 함수',
      action: 'clicked',
    },
    type: {
      description: '버튼 타입 ("button", "submit", "reset")',
      control: {
        type: 'radio',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
};

export default meta;

// 기본 템플릿 함수
const Template: StoryFn<ButtonProps> = function ButtonStory(args) {
  return <Button {...args} />;
};

// btn-filled 스타일
export const Filled = Template.bind({});
Filled.args = {
  children: 'Filled',
  className: 'btn-filled w-40',
};

// btn-outlined 스타일
export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  className: 'btn-outlined w-48',
};

// btn-disabled 스타일
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  className: 'btn-disabled sm:w-24 md:w-32 lg:w-40',
  onClick: undefined,
};
