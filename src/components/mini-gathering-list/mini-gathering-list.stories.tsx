import type { Meta, StoryObj } from '@storybook/react';
import MiniGatheringList from './index';

// MiniGatheringList 파일 경로에 맞춰 수정

const meta: Meta<typeof MiniGatheringList> = {
  title: 'Components/MiniGatheringList',
  component: MiniGatheringList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MiniGatheringList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
