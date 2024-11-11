import type { Meta, StoryObj } from '@storybook/react';
import { useGetCrewQuery } from '@/src/_queries/crew-queries';
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll';
import ClientProvider from '@/src/components/client-provider';
import { MainCrewListResponse } from '@/src/types/crew-card';
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
  const { data, ref, isFetchingNextPage } =
    useInfiniteScroll<MainCrewListResponse>(useGetCrewQuery());

  return <CrewCardList data={data} ref={ref} isFetchingNextPage={isFetchingNextPage} />;
}

export const Default: Story = {
  render: () => <RenderCrewCardList />,
  args: {},
};
