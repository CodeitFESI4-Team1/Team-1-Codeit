import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Profile } from './index';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    imageUrl: { control: 'text' },
    editable: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
    onEdit: fn(),
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;
// 기본 설정: Small 프로필
export const Small: Story = {
  args: {
    size: 'small',
    editable: false,
    imageUrl: '',
  },
};
// small 크기와 외부 이미지
export const SmallWithImage: Story = {
  args: {
    size: 'small',
    imageUrl: 'https://i.pinimg.com/736x/3f/e4/f4/3fe4f4f3aee36ec57aa072cce2e016b3.jpg',
  },
};
// Large 크기와 편집 가능한 상태
export const LargeEditable: Story = {
  args: {
    size: 'large',
    imageUrl: 'https://i.pinimg.com/736x/3f/e4/f4/3fe4f4f3aee36ec57aa072cce2e016b3.jpg',
    editable: true,
  },
};
// Large 크기, 기본 이미지 사용
export const LargeDefaultImage: Story = {
  args: {
    size: 'large',
  },
};
// 편집 가능하지만 이미지 없음
export const EditableWithoutImage: Story = {
  args: {
    editable: true,
  },
};
