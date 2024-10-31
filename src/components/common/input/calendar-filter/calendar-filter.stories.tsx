import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import CalendarFilter, { CalendarFilterProps } from '.';

const mockData = [
  new Date('2024-10-01'),
  new Date('2024-10-05'),
  new Date('2024-10-12'),
  new Date('2024-10-15'),
];

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

export const CalendarFilterWithPlay = Template.bind({});
CalendarFilterWithPlay.args = {
  value: new Date(),
};

// play 함수 정의
CalendarFilterWithPlay.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 예: 달력에서 특정 날짜 선택
  const dateButtons = await canvas.findAllByTestId('day');
  const targetButton = dateButtons.find((button) => button.textContent === '15');
  if (targetButton) {
    await userEvent.click(targetButton, { delay: 500 });
  } else {
    throw new Error('Day "15" not found');
  }
};
