import { Loader } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { useGetCrewListQuery } from '@/src/_queries/crew/crew-list-queries';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
import ClientProvider from '@/src/components/client-provider';
import CrewCardList from './crew-card-list';

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCardList',
  component: CrewCardList,
  parameters: {
    layout: 'fullscreen',
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
} satisfies Meta<typeof CrewCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

function RenderCrewCardList() {
  const { data, status, isFetchingNextPage, ref } = useInfiniteScroll(
    useGetCrewListQuery({
      condition: {
        keyword: '',
        mainLocation: '',
        mainCategory: '',
        subCategory: '',
        sortType: 'POPULAR',
      },
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );

  if (!data) return null;
  return (
    <div>
      {data && <CrewCardList data={data} />}
      {status === 'pending' || isFetchingNextPage ? (
        <div className="flex justify-center py-10">
          <Loader size="sm" />
        </div>
      ) : (
        <div ref={ref} className="h-[1px]" />
      )}
      {status === 'error' && <p className="py-10 text-center">에러가 발생했습니다.</p>}
    </div>
  );
}

export const Default: Story = {
  render: () => <RenderCrewCardList />,
  args: {},
};
