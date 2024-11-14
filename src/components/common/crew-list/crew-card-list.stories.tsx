import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteData } from '@tanstack/react-query';
import { useGetCrewListQuery } from '@/src/_queries/crew/crew-list-queries';
import { useInfiniteScroll } from '@/src/hooks/use-infinite-scroll';
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
  const { data, ref, isFetchingNextPage } = useInfiniteScroll(
    useGetCrewListQuery({
      condition: {
        keyword: '',
        mainLocation: '',
        mainCategory: '',
        subCategory: '',
        sortType: 'LATEST',
      },
      pageable: { page: 0, size: 6, sort: ['createdAt,desc'] },
    }),
  );

  if (!data) return null;
  return <CrewCardList data={data} ref={ref} isFetchingNextPage={isFetchingNextPage} />;
}

export const Default: Story = {
  render: () => <RenderCrewCardList />,
  args: {},
};
