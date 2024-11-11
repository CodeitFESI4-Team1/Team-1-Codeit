import type { Meta, StoryObj } from '@storybook/react';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import { fetchWritableGatheringData } from '@/src/app/(crew)/api/mock-api/writable-gathering';
import ClientProvider from '@/src/components/client-provider';
import { WritableGatheringCardInformResponse } from '@/src/types/writable-gathering-card';
import WritableGatheringCardList from './writable-gathering-card-list';

const meta: Meta = {
  title: 'Components/WritableGatheringCardList',
  component: WritableGatheringCardList,
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
        <div className="w-[1200px]">
          <Story />
        </div>
      </ClientProvider>
    ),
  ],
} satisfies Meta<typeof WritableGatheringCardList>;

function RenderWritableGatheringCardList() {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll<WritableGatheringCardInformResponse>({
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) => {
      return fetchWritableGatheringData(pageParam, 3);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });
  return (
    <WritableGatheringCardList data={data} isFetchingNextPage={isFetchingNextPage} ref={ref} />
  );
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RenderWritableGatheringCardList />,
  args: {},
};
