import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GatheringCard from './container';

const queryClient = new QueryClient();

const meta: Meta<typeof GatheringCard> = {
  title: 'gathering/gathering-card',
  component: GatheringCard,
  parameters: {
    docs: {
      subtitle: '약속을 확인할 수 있는 카드입니다.',
      description: {
        component:
          '약속에 대한 간단한 정보를 알 수 있습니다. 크루 디테일 페이지와 찜한 약속에서 사용합니다.',
      },
    },
    backgrounds: {
      default: 'light-gray',
      // TODO: #F9FAFB 색상이 지금은 static으로 작성되어 있는데(여기 말고도 몇군데가 더 있습니다.) tailwind theme 50 컬러를 가져와서 사용할 수 없을까요?
      values: [{ name: 'light-gray', value: '#F9FAFB' }],
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
} satisfies Meta<typeof GatheringCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '서핑모임',
    dateTime: '2024-12-10T08:00:00.000',
    location: '서울 강남구 삼성동',
    currentCount: 1,
    totalCount: 5,
    imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    liked: false,
  },
};

// 마감된 모임 카드
export const PastEvent: Story = {
  args: {
    title: '서핑모임',
    dateTime: '2024-02-10T08:00:00.000',
    location: '서울 강남구 삼성동',
    currentCount: 1,
    totalCount: 5,
    imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    liked: false,
  },
};

// 찜한 모임 카드
export const LikedEvent: Story = {
  args: {
    title: '서핑모임',
    dateTime: '2024-12-10T08:00:00.000',
    location: '서울 강남구 삼성동',
    currentCount: 1,
    totalCount: 5,
    imageUrl: 'https://i.pinimg.com/736x/00/6d/4b/006d4bb521a737534e37a8af3203a7d3.jpg',
    liked: true,
  },
};
