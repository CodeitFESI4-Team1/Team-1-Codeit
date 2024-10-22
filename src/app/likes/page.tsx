import { ReviewCardProps } from '@/src/components/common/review-list/review-card';
import ReviewCardList from '@/src/components/common/review-list/review-card-list';

const mockDataList: ReviewCardProps[] = [
  {
    score: 40,
    comment: '완벽해요',
    createdAt: new Date(),
    user: {
      id: 1,
      name: '샘플유저',
      image: './cat.jpg',
    },
  },
  {
    score: 60,
    comment: '별로',
    createdAt: new Date(),
    user: {
      id: 2,
      name: '샘플유저',
      image: './cat.jpg',
    },
  },
];

export default function Likes() {
  return <ReviewCardList reviewList={mockDataList} />;
}
