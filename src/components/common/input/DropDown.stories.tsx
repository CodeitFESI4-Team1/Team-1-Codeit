import React, { useState } from 'react';

import { ComboboxItem } from '@mantine/core';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';

import DropDown, { DropDownProps } from './DropDown';

const meta: Meta = {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<DropDownProps> = function DropDownStory(args: DropDownProps) {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <DropDown
      {...args}
      value={value ? value.value : null}
      onChange={(newValue, option) => {
        setValue(option);
        action('onChange')(newValue, option); // 액션 로그
      }}
    />
  );
};

export const Region = Template.bind({});
Region.args = {
  variant: 'region',
  data: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: '지역 전체',
  value: null,
  className: 'w-[110px]',
};

export const Category = Template.bind({});
Category.args = {
  variant: 'category',
  data: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: '카테고리 전체',
  value: null,
  className: 'w-full',
};

export const Sort = Template.bind({});
Sort.args = {
  variant: 'sort',
  data: ['마감 임박', '참여 인원'],
  placeholder: '마감 임박',
  value: null,
  className: 'w-[110px]',
};
