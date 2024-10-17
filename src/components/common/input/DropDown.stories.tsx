import React, { useState } from 'react';

import { ComboboxItem } from '@mantine/core';
import type { Meta, StoryFn } from '@storybook/react';

import DropDown, { DropDownProps } from './DropDown';

const meta: Meta = {
  title: 'Components/DropDown',
  component: DropDown,
};

export default meta;

const Template: StoryFn<DropDownProps> = function DropDownStory(args: DropDownProps) {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <DropDown
      {...args}
      value={value ? value.value : null}
      onChange={(_value, option) => setValue(option)}
    />
  );
};

export const Region = Template.bind({});
Region.args = {
  data: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: '지역 전체',
  value: null,
  className: 'w-[110px]',
};

export const Category = Template.bind({});
Category.args = {
  data: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: '카테고리 전체',
  value: null,
  className: 'w-full',
};
