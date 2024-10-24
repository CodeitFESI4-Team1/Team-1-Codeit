import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import CalendarFilter, { CalendarFilterProps } from '.';

const mockData = [new Date('2024-10-12'), new Date('2024-10-15')];

const meta: Meta = {
  title: 'Components/input/calendar-filter',
  component: CalendarFilter,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: { name: 'string' },
      description: '선택된 날짜',
    },
    toDoDates: mockData,
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      description: {
        component:
          '달력에서 날짜를 선택하면 값을 변경할 수 있는 컴포넌트입니다. 선택된 날짜는 `value`로 전달되며, `toDoDates`에 일정이 있는 날짜를 표시할 수 있습니다',
      },
    },
  },
};

export default meta;

const Template: StoryFn<CalendarFilterProps> = function CalendarFilterStory() {
  const [date, setDate] = useState<Date>(new Date());

  return <CalendarFilter value={date} toDoDates={mockData} onChange={setDate} />;
};

export const CalendarFilter01 = Template.bind({});
CalendarFilter01.args = {
  value: new Date(),
  toDoDates: mockData,
  onChange: action('onChange'),
};
