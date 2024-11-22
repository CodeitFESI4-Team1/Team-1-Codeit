import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RatingDisplay, { ReviewRateInfo } from './rating-display';

export default {
  title: 'crew/crew-rating-display',
  component: RatingDisplay,
  parameters: {
    docs: {
      subtitle: '크루 디테일 페이지에서 크루의 리뷰 정보를 알 수 있는 컴포넌트 입니다.',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    totalRate: { control: 'number', description: '총 평가 개수' },
    averageRate: { control: 'number', description: '평균 평점' },
    ratingsData: { control: 'object', description: '각 점수별 평가 개수' },
  },
} as Meta<typeof RatingDisplay>;

interface RatingDisplayStoryProps {
  totalRate: number;
  averageRate: number;
  ratingsData: { score: number; count: number }[];
}

// Template을 함수 선언으로 변경하고 StoryFn 타입을 사용
const Template: StoryFn<RatingDisplayStoryProps> = function Template(args) {
  const { totalRate, averageRate, ratingsData } = args;
  const reviewRateInfo: ReviewRateInfo = { totalRate, averageRate, ratingsData };
  return <RatingDisplay reviewRateInfo={reviewRateInfo} />;
};

// 스토리 정의
export const Default = Template.bind({});
Default.args = {
  totalRate: 24,
  averageRate: 3.5,
  ratingsData: [
    { score: 5, count: 6 },
    { score: 4, count: 9 },
    { score: 3, count: 4 },
    { score: 2, count: 3 },
    { score: 1, count: 2 },
  ],
};

export const HighRating = Template.bind({});
HighRating.args = {
  totalRate: 15,
  averageRate: 4.7,
  ratingsData: [
    { score: 5, count: 10 },
    { score: 4, count: 3 },
    { score: 3, count: 1 },
    { score: 2, count: 1 },
    { score: 1, count: 0 },
  ],
};

export const LowRating = Template.bind({});
LowRating.args = {
  totalRate: 20,
  averageRate: 1.8,
  ratingsData: [
    { score: 5, count: 1 },
    { score: 4, count: 1 },
    { score: 3, count: 2 },
    { score: 2, count: 5 },
    { score: 1, count: 11 },
  ],
};
