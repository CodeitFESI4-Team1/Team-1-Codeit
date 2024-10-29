import type { Meta, StoryObj } from '@storybook/react';
import { CrewCardInform } from './crew-card';
import CrewCardList from './crew-card-list';

const mockData: CrewCardInform[] = [
  {
    crewId: 1,
    type: '유산소',
    subType: '수영',
    name: '같이 물장구칠사람 구함',
    location: '경기도',
    detailedLocation: '어디구 어디로',
    participantCount: 20,
    capacity: 24,
    images: [
      { imagePath: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg' },
    ],
    createdBy: 1,
    createdDate: new Date('2024-11-04'),
    updatedDate: new Date('2024-11-05'),
    isConfirmed: true,
  },
  {
    crewId: 2,
    type: '유산소',
    subType: '달리기',
    name: '같이 달릴사람 구함',
    location: '광주',
    detailedLocation: '어디구 어디로',
    participantCount: 10,
    capacity: 20,
    images: [
      { imagePath: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg' },
    ],
    createdBy: 1,
    createdDate: new Date('2024-11-04'),
    updatedDate: new Date('2024-11-05'),
    isConfirmed: true,
  },
  {
    crewId: 3,
    type: '유산소',
    subType: '달리기',
    name: '같이 달릴사람 구함',
    location: '부산',
    detailedLocation: '어디구 어디로',
    participantCount: 1,
    capacity: 5,
    images: [
      { imagePath: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg' },
    ],
    createdBy: 2,
    createdDate: new Date('2024-11-04'),
    updatedDate: new Date('2024-11-05'),
    isConfirmed: false,
  },
  {
    crewId: 4,
    type: '유산소',
    subType: '달리기',
    name: '같이 달릴사람 구함',
    location: '부산',
    detailedLocation: '어디구 어디로',
    participantCount: 1,
    capacity: 20,
    images: [
      { imagePath: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg' },
    ],
    createdBy: 2,
    createdDate: new Date('2024-11-04'),
    updatedDate: new Date('2024-11-05'),
    canceledAt: new Date('2024-12-01'),
    isConfirmed: false,
  },
];

const meta: Meta = {
  title: 'Components/CrewCardList/CrewCardList',
  component: CrewCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    CrewCardInforms: mockData,
  },
} satisfies Meta<typeof CrewCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isWide: false,
  },
};

export const isWide: Story = {
  args: {
    isWide: true,
  },
};
