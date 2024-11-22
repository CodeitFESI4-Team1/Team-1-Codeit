import type { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@/src/components/common/header/container';

const meta: Meta = {
  title: 'layout/header',
  component: Header,
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
      story: '사용자가 기본 경로(/)에 있는 경우',
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
      story: '사용자가 "나의 크루" 경로에 있는 경우',
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
      story: '사용자가 "나의 약속" 경로에 있는 경우',
    },
  },
};

// 3. 로그인 상태에서 나의 모임 (/my-favorite) 경로
export const MyFavorite: StoryFn = Template.bind({});
MyFavorite.parameters = {
  nextjs: {
    navigation: {
      pathname: '/my-favorite',
      query: {},
    },
  },
  docs: {
    description: {
      story: '사용자가 "찜한 약속" 경로에 있는 경우',
    },
  },
};
