import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GatheringResponseType } from '@/src/types/gathering-data';
import GatheringList from './gathering-list';

const queryClient = new QueryClient();

const meta: Meta<typeof GatheringList> = {
  title: 'Components/GatheringList',
  component: GatheringList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof GatheringList>;

export default meta;
type Story = StoryObj<typeof meta>;

// 임시 데이터 갯수별
const dataWithOneItem: GatheringResponseType = {
  content: [
    {
      id: 1,
      title: '첫 번째 모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
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
      title: '첫 번째 모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 2,
      title: '두 번째 모임',
      dateTime: '2024-12-15T09:00:00.000',
      location: '서울 종로구 광화문',
      currentCount: 3,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 3,
      title: '세 번째 모임',
      dateTime: '2024-12-20T10:00:00.000',
      location: '서울 서초구 양재천',
      currentCount: 2,
      totalCount: 4,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
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
      title: '첫 번째 모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 2,
      title: '두 번째 모임',
      dateTime: '2024-12-15T09:00:00.000',
      location: '서울 종로구 광화문',
      currentCount: 3,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 3,
      title: '세 번째 모임',
      dateTime: '2024-12-20T10:00:00.000',
      location: '서울 서초구 양재천',
      currentCount: 2,
      totalCount: 4,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 4,
      title: '네 번째 모임',
      dateTime: '2024-12-25T14:00:00.000',
      location: '서울 용산구 한남동',
      currentCount: 5,
      totalCount: 6,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 5,
      title: '다섯 번째 모임',
      dateTime: '2024-12-30T16:00:00.000',
      location: '서울 송파구 잠실',
      currentCount: 3,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
  ],
  pageNumber: 0,
  pageSize: 6,
  totalElements: 5,
  totalPages: 1,
};

const dataWithSevenItems: GatheringResponseType = {
  content: [
    {
      id: 1,
      title: '첫 번째 모임',
      dateTime: '2024-12-10T08:00:00.000',
      location: '서울 강남구 삼성동',
      currentCount: 1,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 2,
      title: '두 번째 모임',
      dateTime: '2024-12-15T09:00:00.000',
      location: '서울 종로구 광화문',
      currentCount: 3,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 3,
      title: '세 번째 모임',
      dateTime: '2024-12-20T10:00:00.000',
      location: '서울 서초구 양재천',
      currentCount: 2,
      totalCount: 4,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 4,
      title: '네 번째 모임',
      dateTime: '2024-12-25T14:00:00.000',
      location: '서울 용산구 한남동',
      currentCount: 5,
      totalCount: 6,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 5,
      title: '다섯 번째 모임',
      dateTime: '2024-12-30T16:00:00.000',
      location: '서울 송파구 잠실',
      currentCount: 3,
      totalCount: 5,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 6,
      title: '여섯 번째 모임',
      dateTime: '2025-01-05T18:00:00.000',
      location: '서울 은평구 불광동',
      currentCount: 4,
      totalCount: 4,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
    {
      id: 7,
      title: '일곱 번째 모임',
      dateTime: '2025-01-10T20:00:00.000',
      location: '서울 노원구 상계동',
      currentCount: 2,
      totalCount: 3,
      imageUrl:
        'https://crewcrew.s3.ap-northeast-2.amazonaws.com/gathering/73db4777-3d00-488c-a016-1e50eaa72b8f',
    },
  ],
  pageNumber: 0,
  pageSize: 6,
  totalElements: 7,
  totalPages: 2,
};

export const OneItem: Story = {
  args: {
    gatheringData: dataWithOneItem,
  },
};

export const ThreeItems: Story = {
  args: {
    gatheringData: dataWithThreeItems,
  },
};

export const FiveItems: Story = {
  args: {
    gatheringData: dataWithFiveItems,
  },
};

export const SevenItems: Story = {
  args: {
    gatheringData: dataWithSevenItems,
  },
};
