import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RatingDisplay, { ReviewRateInfo } from './rating-display';

export default {
  title: 'Components/RatingDisplay',
  component: RatingDisplay,
  tags: ['autodocs'],
  argTypes: {
    totalReviewCount: { control: 'number', description: '총 평가 개수' },
    averageRate: { control: 'number', description: '평균 평점' },
    ratingsData: { control: 'object', description: '각 점수별 평가 개수' },
  },
} as Meta<typeof RatingDisplay>;

interface RatingDisplayStoryProps {
  totalReviewCount: number;
  averageRate: number;
  ratingsData: { score: number; count: number }[];
}

// Template을 함수 선언으로 변경하고 StoryFn 타입을 사용
const Template: StoryFn<RatingDisplayStoryProps> = function Template(args) {
  const { totalReviewCount, averageRate, ratingsData } = args;
  const reviewRateInfo: ReviewRateInfo = { totalReviewCount, averageRate, ratingsData };
  return <RatingDisplay reviewRateInfo={reviewRateInfo} />;
};

// 스토리 정의
export const Default = Template.bind({});
Default.args = {
  totalReviewCount: 24,
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
  totalReviewCount: 15,
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
  totalReviewCount: 20,
  averageRate: 1.8,
  ratingsData: [
    { score: 5, count: 1 },
    { score: 4, count: 1 },
    { score: 3, count: 2 },
    { score: 2, count: 5 },
    { score: 1, count: 11 },
  ],
};
