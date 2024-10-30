import type { Meta, StoryObj } from '@storybook/react';
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll';
import { fetchCrewData } from '@/src/app/api/mock-api/crew';
import { CrewCardInformResponse } from '@/src/types/crew-card';
import ClientProvider from '../../client-provider';
import CrewCardList, { CrewCardListProps } from './crew-card-list';

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCardList',
  component: CrewCardList,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  args: {
    // CrewCardInforms: crewData,
  },
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

function RenderCrewCardList({ isWide = false }: Pick<CrewCardListProps, 'isWide'>) {
  const { data, ref, isFetchingNextPage } = useInfiniteScroll<CrewCardInformResponse>({
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }) => {
      return fetchCrewData(pageParam, 3);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
  });

  return (
    <CrewCardList data={data} ref={ref} isWide={isWide} isFetchingNextPage={isFetchingNextPage} />
  );
}

export const Default: Story = {
  render: () => <RenderCrewCardList />,
  args: {},
};

export const IsWide: Story = {
  render: () => <RenderCrewCardList isWide />,
  args: {},
};
