import type { Meta, StoryObj } from '@storybook/react';
import Profiles from './profiles';

const meta: Meta = {
  title: 'Components/CrewCardList/Profiles',
  component: Profiles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profiles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Three: Story = {
  args: {
    id: 1,
    shows: 4,
  },
};
export const Four: Story = {
  args: {
    id: 2,
    shows: 4,
  },
};
export const Five: Story = {
  args: {
    id: 3,
    shows: 4,
  },
};
export const ShowThree: Story = {
  args: {
    id: 3,
    shows: 3,
  },
};
