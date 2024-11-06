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
      description: '`default` | `sort`',
      control: {
        type: 'radio',
        option: ['default', 'sort'],
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

const Template: StoryFn<DropDownProps> = function DropDownStory(args) {
  const [value, setValue] = useState<string | null>('option1');

  return (
    <DropDown
      {...args}
      value={value}
      className="w-[110px]"
      onChange={(newValue) => {
        setValue(newValue);
        action('onChange')(newValue); // 액션 로그
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  name: 'region',
  data: [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
  ],
  placeholder: '지역 전체',
  value: 'option1',
  className: 'w-[110px]',
};

export const Sort = Template.bind({});
Sort.args = {
  variant: 'sort',
  name: 'sort',
  data: [
    { value: 'latest', label: '최신순' },
    { value: 'best', label: '인기순' },
  ],
  placeholder: '최신순',
  value: 'latest',
  className: 'w-[110px]',
};
