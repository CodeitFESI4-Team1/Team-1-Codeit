import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import categoryData from '@/src/data/category.json';
import InternalCategory, { InternalCategoryProps } from '.';

const meta: Meta = {
  title: 'layout/category',
  component: InternalCategory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '운동 종목별 카테고리',
      description: {
        component: '크루찾기 페이지에서 운동 대종목 선택에 따라, 세부 카테고리를 보여줍니다.',
      },
    },
  },
  argTypes: {
    category: {
      description: '카테고리 이름 배열',
    },
  },
};

export default meta;

const Template: StoryFn = function InternalCategoryStory() {
  const [subCategory, setSubCategory] = useState('running');

  return (
    <InternalCategory
      value={subCategory}
      category={categoryData[0].items}
      onChange={setSubCategory}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
