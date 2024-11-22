import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GatheringResponseType } from '@/src/types/gathering-data';
import LikedListPresenter from './liked-list-presenter';

const queryClient = new QueryClient();

const meta: Meta<typeof LikedListPresenter> = {
  title: 'gathering/liked-gathering-card',
  component: LikedListPresenter,
  parameters: {
    docs: {
      subtitle: '찜한 약속을 확인하는 컴포넌트 입니다.',
      description: {
        component: '페이지네이션을 사용해 한 페이지에 6개씩 확인할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof LikedListPresenter>;

export default meta;
type Story = StoryObj<typeof meta>;

const onLike = action('onLike');
const onUnlike = action('onUnlike');
const onPageChange = action('onPageChange');

// 임시 데이터 갯수별
const dataWithOneItem: GatheringResponseType = {
  content: [
    {
      id: 1,
      title: '서핑모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    },
  ],
  pageNumber: 0,
  pageSize: 6,
  totalElements: 1,
  totalPages: 1,
};

const dataWithThreeItems: GatheringResponseType = {
  content: [
    {
      id: 1,
      title: '서핑모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    },
    {
      id: 2,
      title: '헬스',
      dateTime: '2024-12-15T09:00:00.000',
      location: '서울 종로구 광화문',
      currentCount: 3,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/fb/53/e3/fb53e3a4225c01308c30882d92bee467.jpg',
    },
    {
      id: 3,
      title: '서핑모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    },
  ],
  pageNumber: 0,
  pageSize: 6,
  totalElements: 3,
  totalPages: 1,
};

const dataWithFiveItems: GatheringResponseType = {
  content: [
    {
      id: 1,
      title: '서핑모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    },
    {
      id: 2,
      title: '헬스',
      dateTime: '2024-12-15T09:00:00.000',
      location: '서울 종로구 광화문',
      currentCount: 3,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/fb/53/e3/fb53e3a4225c01308c30882d92bee467.jpg',
    },
    {
      id: 3,
      title: '서핑모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    },
    {
      id: 4,
      title: '러닝 같이 해요',
      dateTime: '2024-12-25T14:00:00.000',
      location: '서울 용산구 한남동',
      currentCount: 5,
      totalCount: 6,
      imageUrl: 'https://i.pinimg.com/736x/72/8e/94/728e94219c8d4570d0901e7df5567282.jpg',
    },
    {
      id: 5,
      title: '같이 풋살해요',
      dateTime: '2024-12-30T16:00:00.000',
      location: '서울 송파구 잠실',
      currentCount: 3,
      totalCount: 5,
      imageUrl: 'https://i.pinimg.com/736x/25/64/5c/25645c1cbb29c5b8e8ebe995404b5ab6.jpg',
    },
  ],
  pageNumber: 0,
  pageSize: 6,
  totalElements: 5,
  totalPages: 1,
};

export const OneItem: Story = {
  args: {
    gatheringData: dataWithOneItem,
    onPageChange,
    onLike,
    onUnlike,
    page: 1,
  },
};

export const ThreeItems: Story = {
  args: {
    gatheringData: dataWithThreeItems,
    onPageChange,
    onLike,
    onUnlike,
    page: 1,
  },
};

export const FiveItems: Story = {
  args: {
    gatheringData: dataWithFiveItems,
    onPageChange,
    onLike,
    onUnlike,
    page: 1,
  },
};
