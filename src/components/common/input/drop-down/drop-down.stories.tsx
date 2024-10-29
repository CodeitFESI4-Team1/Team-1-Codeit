import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import DropDown, { DropDownProps } from '.';

const meta: Meta = {
  title: 'Components/input/drop-down',
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
  const [value, setValue] = useState<string | null>(null);

  return (
    <DropDown
      {...args}
      value={value}
      onChange={(newValue, option) => {
        setValue(newValue);
        action('onChange')(newValue, option); // 액션 로그
      }}
    />
  );
};

export const Region = Template.bind({});
Region.args = {
  variant: 'region',
  data: [
    { value: 'option 1', label: '옵션 1' },
    { value: 'option 2', label: '옵션 2' },
  ],
  placeholder: '지역 전체',
  value: null,
  className: 'w-[110px]',
};

export const Category = Template.bind({});
Category.args = {
  variant: 'category',
  data: [
    { value: 'option 1', label: '옵션 1' },
    { value: 'option 2', label: '옵션 2' },
    { value: 'option 3', label: '옵션 3' },
  ],
  placeholder: '카테고리 전체',
  value: null,
  className: 'w-full',
};

export const Sort = Template.bind({});
Sort.args = {
  variant: 'sort',
  data: [
    { value: 'latest', label: '최신순' },
    { value: 'best', label: '인기순' },
  ],
  placeholder: '최신순',
  value: null,
  className: 'w-[110px]',
};
