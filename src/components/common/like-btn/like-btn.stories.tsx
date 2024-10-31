import type { Meta, StoryObj } from '@storybook/react';
import LikeBtn from './index';

const meta: Meta<typeof LikeBtn> = {
  title: 'Components/LikeBtn',
  component: LikeBtn,
  tags: ['autodocs'],
  argTypes: {
    isLiked: { control: 'boolean' },
    id: { control: 'number' },
    onLikeToggle: { action: 'liked toggled' }, // 클릭 이벤트 발생 시 로그 확인
  },
} satisfies Meta<typeof LikeBtn>;

export default meta;
type Story = StoryObj<typeof LikeBtn>;

export const Default: Story = {
  args: {
    id: 1,
    isLiked: false, // 기본적으로 찜하지 않은 상태
  },
};

export const Liked: Story = {
  args: {
    id: 2,
    isLiked: true, // 찜한 상태로 시작
    size: 32,
  },
};
