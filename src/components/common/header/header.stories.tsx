import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import Header from '@/src/components/common/header/container';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component:
          '헤더 컴포넌트. 경로에 따라 링크의 글씨 색이 변합니다. 쿠키를 계속 넣을 수 없어 해당 탭에서만 확인할 수 있습니다.',
      },
    },
  },
};

export default meta;
function Template() {
  return <Header />;
}

// 1. 모임 찾기 (/) 경로
export const Home: StoryFn = Template.bind({});
Home.args = {
  hasCookie: false,
};
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
MyCrew.args = {
  hasCookie: true,
};
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
MyGathering.args = {
  hasCookie: true,
};
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

// 4. 토글 버튼으로 로그인/비로그인 상태를 변경
export const WithToggleCookie: StoryFn = Template.bind({});
WithToggleCookie.args = {
  hasCookie: false,
  handleLogout: action('Logged out'),
};
WithToggleCookie.parameters = {
  nextjs: {
    navigation: {
      pathname: '/',
      query: {},
    },
  },
  docs: {
    description: {
      story: '로그인/로그아웃 상태를 토글하여 네비게이션이 동적으로 변경되는지를 확인',
    },
  },
};
