import type { Meta, StoryObj } from '@storybook/react';
import CrewCard from './crew-card';

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCard',
  component: CrewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: 0,
    name: '같이 물장구칠사람',
    location: '충청',
    thumbnail: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
  },
} satisfies Meta<typeof CrewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    capacity: 20,
    participantCount: 10,
    isConfirmed: true,
  },
};

export const NotConfirmed: Story = {
  args: {
    capacity: 10,
    participantCount: 1,
    isConfirmed: false,
  },
};

export const Fulled: Story = {
  args: {
    capacity: 5,
    participantCount: 5,
    isConfirmed: true,
  },
};

export const Canceled: Story = {
  args: {
    capacity: 10,
    participantCount: 2,
    isConfirmed: true,
    canceledDate: new Date('2024-10-27'),
  },
};
