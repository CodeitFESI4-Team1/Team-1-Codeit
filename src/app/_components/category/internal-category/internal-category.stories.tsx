import React, { useState } from 'react';
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
  const [subCategory, setSubCategory] = useState('running');

  return (
    <InternalCategory
      value={subCategory}
      category={categoryData[0].items}
      onChange={setSubCategory}
    />
  );
};

export const Category1 = Template.bind({});
Category1.args = {
  category: categoryData[0].items,
};

export const Category2 = Template.bind({});
Category2.args = {
  category: categoryData[1].items,
};
