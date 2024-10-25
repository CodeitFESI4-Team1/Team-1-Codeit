import type { Meta, StoryObj } from '@storybook/react';
import GatheringCardCarousel from './gathering-card-carousel';

const meta: Meta<typeof GatheringCardCarousel> = {
  title: 'Components/GatheringCardCarousel',
  component: GatheringCardCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GatheringCardCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
