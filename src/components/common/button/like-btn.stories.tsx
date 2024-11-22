import type { Meta, StoryObj } from '@storybook/react';
import LikeBtn from './like-btn';

const meta: Meta<typeof LikeBtn> = {
  title: 'common/button/like-button',
  component: LikeBtn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    docs: {
      subtitle: '찜하기 버튼은 약속 카드에서 약속을 찜할 때 사용됩니다.',
      description: {
        component: '클릭해 찜한 상태 / 찜하지 않은 상태를 나타냅니다.',
      },
    },
  },
} satisfies Meta<typeof LikeBtn>;

export default meta;
type Story = StoryObj<typeof LikeBtn>;

// 기본적으로 찜하지 않은 상태
export const Default: Story = {
  args: {
    id: 1,
    isLiked: false,
  },
};

// 찜한 상태로 시작, 사이즈 작음
export const Liked: Story = {
  args: {
    id: 2,
    isLiked: true,
    size: 32,
  },
};
