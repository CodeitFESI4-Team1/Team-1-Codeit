import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import tabData from '@/src/data/tab.json';
import Tabs, { TabsProps } from './index';

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: '탭 목록 데이터 배열',
      control: 'object',
    },
    activeTab: {
      description: '현재 활성화된 탭 ID',
      control: 'text',
    },
    onTabClick: {
      description: '탭 클릭 시 호출되는 함수',
    },
    variant: {
      description: '탭 스타일 유형 ("default" | "review")',
      control: {
        type: 'radio',
        options: ['default', 'review'],
      },
    },
  },
};

export default meta;

const Template: StoryFn<TabsProps> = function TabsStory({ activeTab, tabs, ...args }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(activeTab || tabs[0].id);

  return (
    <Tabs
      {...args}
      tabs={tabs}
      activeTab={currentTab}
      onTabClick={(id) => {
        setCurrentTab(id);
        action('onTabClick')(id);
      }}
    />
  );
};

// AppointmentTabs 스토리
export const AppointmentTabs = Template.bind({});
AppointmentTabs.args = {
  tabs: tabData.appointmentTabs,
  activeTab: tabData.appointmentTabs[0].id,
};

// CrewTabs 스토리
export const CrewTabs = Template.bind({});
CrewTabs.args = {
  tabs: tabData.crewTabs,
  activeTab: tabData.crewTabs[0].id,
};

// ReviewTab 스토리
export const ReviewTabs = Template.bind({});
ReviewTabs.args = {
  tabs: tabData.reviewTabs,
  activeTab: tabData.reviewTabs[0].id,
  variant: 'review',
};
