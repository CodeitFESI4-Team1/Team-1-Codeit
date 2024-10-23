import React, { useState } from 'react';
import { ComboboxItem } from '@mantine/core';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import DropDown, { DropDownProps } from './drop-down';

const meta: Meta = {
  title: 'Components/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '컴포넌트 wrapper에 추가하는 클래스명',
    },
    value: {
      description: '선택된 값',
    },
    data: {
      description: '옵션 데이터 배열',
    },
    variant: {
      description: '`region` | `category` | `sort`',
      control: {
        type: 'radio',
        option: ['region', 'category', 'sort'],
      },
    },
    placeholder: {
      description: '선택된 값이 없을 때 표시하는 문자열',
    },
    onChange: {
      description: '값이 변경될 때 실행하는 함수',
    },
  },
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
  data: ['최신순', '인기순'],
  placeholder: '최신순',
  value: null,
  className: 'w-[110px]',
};
