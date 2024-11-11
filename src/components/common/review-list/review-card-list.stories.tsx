import type { Meta, StoryObj } from '@storybook/react';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import { fetchMyReviewData } from '@/src/app/api/mock-api/review';
import { ReviewInformResponse } from '@/src/types/review';
import ClientProvider from '../../client-provider';
import ReviewCardList from './review-card-list';

const meta: Meta<typeof ReviewCardList> = {
  title: 'components/ReviewCardList',
  component: ReviewCardList,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ClientProvider>
        <Story />
      </ClientProvider>
    ),
  ],
} satisfies Meta<typeof ReviewCardList>;

export default meta;
type Story = StoryObj<typeof ReviewCardList>;

// function RenderCrewReviewCardList({ isMine = false, clickable = false }) {
//   const { data, ref, isFetchingNextPage } = useInfiniteScroll<ReviewInformResponse>({
//     queryKey: ['review'],
//     queryFn: ({ pageParam = 0 }) => fetchCrewReviewData(pageParam, 3),
//     getNextPageParam: (lastPage, allPages) =>
//       lastPage.hasNextPage ? allPages.length + 1 : undefined,
//   });
//   return (
//     <ReviewCardList
//       data={data}
//       ref={ref}
//       isMine={isMine}
//       clickable={clickable}
//       isFetchingNextPage={isFetchingNextPage}
//     />
//   );
// }

function RenderMyReviewCardList({ isMine = true, clickable = false }) {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll<ReviewInformResponse>({
    queryKey: ['review'],
    queryFn: ({ pageParam = 0 }) => fetchMyReviewData(pageParam, 3),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  return (
    <ReviewCardList
      data={data}
      ref={ref}
      isMine={isMine}
      clickable={clickable}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}

// export const CrewReviewCardList: Story = {
//   render: () => <RenderCrewReviewCardList />,
//   args: {},
// };

export const MyReviewCardList: Story = {
  render: () => <RenderMyReviewCardList clickable />,
  args: {},
};
