import type { Meta, StoryObj } from '@storybook/react';
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
      options: ['small', 'header', 'large', 'full'],
    },
    imageUrl: { control: 'text' },
    editable: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <figure className="flex h-20 w-20 items-center justify-center md:h-30 md:w-30 lg:h-30 lg:w-30">
        <Story />
      </figure>
    ),
  ],
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

// Small 크기와 외부 이미지
export const SmallWithImage: Story = {
  args: {
    size: 'small',
    imageUrl: 'https://i.pinimg.com/736x/3f/e4/f4/3fe4f4f3aee36ec57aa072cce2e016b3.jpg',
  },
};

// 편집 가능한 상태 (editable)
export const Editable: Story = {
  args: {
    size: 'full',
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
