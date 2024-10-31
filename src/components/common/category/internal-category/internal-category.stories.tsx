import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import categoryData from '@/src/data/category.json';
import InternalCategory, { InternalCategoryProps } from '.';

const meta: Meta = {
  title: 'Components/category/internal-category',
  component: InternalCategory,
  tags: ['autodocs'],
  argTypes: {
    category: {
      description: '세부 카테고리 이름 배열',
    },
  },
};

export default meta;

const Template: StoryFn<InternalCategoryProps> = function InternalCategoryStory() {
  return <InternalCategory category={categoryData[0].items} />;
};

export const Category1 = Template.bind({});
Category1.args = {
  category: categoryData[0].items,
};

export const Category2 = Template.bind({});
Category2.args = {
  category: categoryData[1].items,
};
