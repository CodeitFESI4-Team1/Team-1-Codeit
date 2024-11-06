import type { Meta, StoryObj } from '@storybook/react';
import { gatheringData } from '@/src/mock/gathering-data';
import GatheringList from './gathering-list';

const meta: Meta<typeof GatheringList> = {
  title: 'Components/GatheringList',
  component: GatheringList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GatheringList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gatheringData,
  },
};
