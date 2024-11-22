// Profiles 스토리북 파일
import type { Meta, StoryObj } from '@storybook/react';
import Profiles from './profiles';

const meta: Meta = {
  title: 'crew/crew-profiles',
  component: Profiles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profiles>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleProfiles = [
  {
    id: 1,
    nickname: 'User1',
  },
  {
    id: 2,
    nickname: 'User2',
    imageUrl: 'https://i.pinimg.com/564x/9d/b8/86/9db886bb5475cc35a7f450831f4125bc.jpg',
  },
  {
    id: 3,
    nickname: 'User3',
    imageUrl: 'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
  },
  {
    id: 4,
    nickname: 'User4',
    imageUrl: 'https://i.pinimg.com/564x/e2/e6/47/e2e64732424094c4e9e2643aaaf4389e.jpg',
  },
  {
    id: 5,
    nickname: 'User5',
    imageUrl: 'https://i.pinimg.com/564x/17/06/45/170645a5f7b8a76f04c15b226b22cf90.jpg',
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
