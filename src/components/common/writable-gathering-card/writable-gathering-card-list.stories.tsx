import type { Meta, StoryObj } from '@storybook/react';
import WritableGatheringCardList from './writable-gathering-card-list';

const meta: Meta = {
  title: 'Components/WritableGatheringCardList',
  component: WritableGatheringCardList,
  tags: ['autodocs'],
} satisfies Meta<typeof WritableGatheringCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
