import type { Meta, StoryObj } from '@storybook/react';
import Hearts, { HeartProp } from '.';

const meta: Meta<HeartProp> = {
  title: 'components/Hearts',
  component: Hearts,
};

export default meta;

export const OnePoint: StoryObj<HeartProp> = {
  args: {
    point: 1,
  },
};

export const TwoPoint: StoryObj<HeartProp> = {
  args: {
    point: 2,
  },
};

export const ThreePoint: StoryObj<HeartProp> = {
  args: {
    point: 3,
  },
};
