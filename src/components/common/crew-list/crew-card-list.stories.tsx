import type { Meta, StoryObj } from '@storybook/react';
import { crewData } from '@/src/mock/crew-dats';
import CrewCardList from './crew-card-list';

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCardList',
  component: CrewCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    CrewCardInforms: crewData,
  },
} satisfies Meta<typeof CrewCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isWide: false,
  },
};

export const isWide: Story = {
  args: {
    isWide: true,
  },
};
