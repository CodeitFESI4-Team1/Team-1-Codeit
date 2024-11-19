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
    profileImageUrl: 'https://i.pinimg.com/736x/3f/e4/f4/3fe4f4f3aee36ec57aa072cce2e016b3.jpg',
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
