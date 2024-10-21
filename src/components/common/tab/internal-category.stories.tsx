import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import category from '@/src/data/category.json';
import InternalCategory, { InternalCategoryProps } from './internal-category';

const meta: Meta = {
  title: 'Components/tab/internal-category',
  component: InternalCategory,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: '세부 카테고리 이름 배열',
    },
  },
};

export default meta;

const Template: StoryFn<InternalCategoryProps> = function InternalCategoryStory({
  items,
}: InternalCategoryProps) {
  return <InternalCategory items={items} />;
};

export const Category1 = Template.bind({});
Category1.args = {
  items: category[0].items,
};

export const Category2 = Template.bind({});
Category2.args = {
  items: category[1].items,
};
