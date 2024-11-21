import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import DateTimePicker, { DateTimePickerProps } from '.';

const meta: Meta = {
  title: 'Components/input/date-time-picker',
  component: DateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    fullDate: {
      type: { name: 'string' },
      description: '선택된 날짜',
    },
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      description: {
        component:
          '달력에서 날짜를 선택하고, 드롭다운으로 시간을 선택하면 날짜/시간 값을 변경할 수 있는 컴포넌트입니다. 선택된 날짜/시간은 `fullDate`로 전달됩니다',
      },
    },
  },
};

export default meta;

const Template: StoryFn<DateTimePickerProps> = function DateTimePickerStory() {
  const [date, setDate] = useState(new Date());

  return <DateTimePicker fullDate={date} onChange={(newValue) => setDate(new Date(newValue))} />;
};

export const DateTimePicker01 = Template.bind({});
DateTimePicker01.args = {
  fullDate: new Date(),
  onChange: action('onChange'),
};
