import type { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/src/components/common/header/container';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
function Template() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Header />
    </QueryClientProvider>
  );
}

// 1. 모임 찾기 (/) 경로
export const Home: StoryFn = Template.bind({});
Home.parameters = {
  nextjs: {
    navigation: {
      pathname: '/',
      query: {},
    },
  },
  docs: {
    description: {
      story: '사용자가 로그아웃 상태이며 기본 경로(/)에 있는 경우',
    },
  },
};

// 2. 로그인 상태에서 나의 크루 (/my-crew) 경로
export const MyCrew: StoryFn = Template.bind({});
MyCrew.parameters = {
  nextjs: {
    navigation: {
      pathname: '/my-crew',
      query: {},
    },
  },
  docs: {
    description: {
      story: '사용자가 로그인 상태일 때 "나의 크루" 경로로 이동(+테스트용 버튼 클릭)',
    },
  },
};

// 3. 로그인 상태에서 나의 모임 (/my-gathering) 경로
export const MyGathering: StoryFn = Template.bind({});
MyGathering.parameters = {
  nextjs: {
    navigation: {
      pathname: '/my-gathering',
      query: {},
    },
  },
  docs: {
    description: {
      story: '사용자가 로그인 상태일 때 "나의 모임" 경로로 이동(+테스트용 버튼 클릭)',
    },
  },
};
