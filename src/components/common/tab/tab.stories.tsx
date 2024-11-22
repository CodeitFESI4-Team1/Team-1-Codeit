import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import tabData from '@/src/data/tab.json';
import Tabs, { TabsProps } from './index';

const meta: Meta = {
  title: 'layout/tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '화면 최상단에 위치한 헤더',
      description: {
        component:
          "'로고, 크루찾기, 나의크루, 나의약속, 로그인/마이페이지/로그아웃'으로 구성되어 있으며 해당페이지로 연결됩니다.",
      },
    },
  },
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
export const MyCrewTabs = Template.bind({});
MyCrewTabs.args = {
  tabs: tabData.crewTabs,
  activeTab: tabData.crewTabs[0].id,
};
MyCrewTabs.parameters = {
  docs: {
    description: {
      story: "'나의 크루' 페이지에서 사용되는 탭",
    },
  },
};

export const MyGatheringTabs = Template.bind({});
MyGatheringTabs.args = {
  tabs: tabData.appointmentTabs,
  activeTab: tabData.appointmentTabs[0].id,
};
MyGatheringTabs.parameters = {
  docs: {
    description: {
      story: "'나의 약속' 페이지에서 사용되는 탭",
    },
  },
};

export const ReviewTabs = Template.bind({});
ReviewTabs.args = {
  tabs: tabData.reviewTabs,
  activeTab: tabData.reviewTabs[0].id,
};
ReviewTabs.parameters = {
  docs: {
    description: {
      story: "'마이페이지' 페이지의 리뷰에서 사용되는 탭",
    },
  },
};
