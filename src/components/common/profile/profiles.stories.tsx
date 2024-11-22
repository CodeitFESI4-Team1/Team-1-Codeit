import type { Meta, StoryObj } from '@storybook/react';
import Profiles from '@/src/components/common/profile/profiles';

const meta: Meta = {
  title: 'common/profiles',
  component: Profiles,
  parameters: {
    layout: 'centered',
    docs: {
      subtitle: '여러 프로필을 나타낼 때 사용하는 프로필 모음입니다.',
      description: {
        component: '크루 카드나 리뷰 카드에서 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profiles>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleProfiles = [
  {
    id: 1,
    nickname: 'User1',
    profileImageUrl: '',
  },
  {
    id: 2,
    nickname: 'User2',
    profileImageUrl: 'https://i.pinimg.com/736x/76/e1/6a/76e16a16b592bba8aacd3e9f82c4c3d6.jpg',
  },
  {
    id: 3,
    nickname: 'User3',
    profileImageUrl: 'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
  },
  {
    id: 4,
    nickname: 'User4',
    profileImageUrl: 'https://i.pinimg.com/564x/e2/e6/47/e2e64732424094c4e9e2643aaaf4389e.jpg',
  },
  {
    id: 5,
    nickname: 'User5',
    profileImageUrl: 'https://i.pinimg.com/564x/17/06/45/170645a5f7b8a76f04c15b226b22cf90.jpg',
  },
];

export const Three: Story = {
  args: {
    profiles: sampleProfiles.slice(0, 3),
  },
};

export const Four: Story = {
  args: {
    profiles: sampleProfiles.slice(0, 4),
  },
};

export const Five: Story = {
  args: {
    profiles: [...sampleProfiles, { id: 5, nickname: 'Extra', imageUrl: null }],
  },
};
