import type { Meta, StoryFn } from '@storybook/react';
import { useAuthStore } from '@/src/store/use-auth-store';
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
  const { isAuth, login, logout, setUser } = useAuthStore();
  const testToken = 'test token';
  const testUser = {
    id: 1,
    nickname: '크루크루',
    email: 'john@example.com',
    profileImageUrl: 'https://image.file',
  };

  const toggleAuth = () => {
    if (isAuth) {
      logout();
    } else {
      login(testToken);
      setUser(testUser);
    }
  };

  return (
    <div>
      <Header />
      <button type="button" onClick={toggleAuth} className="mb-4 mt-5 bg-blue-500 p-2 text-white">
        {'테스트용 - '}
        {isAuth ? '로그아웃하기' : '로그인하기'}
      </button>
    </div>
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

// 4. 토글 버튼으로 로그인/비로그인 상태를 변경
export const WithToggleCookie: StoryFn = Template.bind({});
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

// 5. 로그인 페이지 (/login) 경로
export const LoginPage: StoryFn = Template.bind({});
LoginPage.parameters = {
  nextjs: {
    navigation: {
      pathname: '/login',
      query: {},
    },
  },
  docs: {
    description: {
      story: '로그인 페이지에서는 모든 링크가 하얀색으로 보입니다.',
    },
  },
};
