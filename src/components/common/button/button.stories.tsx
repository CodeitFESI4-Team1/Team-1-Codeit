import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './index';

const meta: Meta = {
  title: 'common/button/button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle: '기본이 되는 버튼 컴포넌트 입니다.',
      description: {
        component: 'filled, outlined, disabled 세가지 스타일이 있습니다.',
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
