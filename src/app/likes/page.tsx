import ReviewCardList, {
  ReviewCardProps,
} from '@/src/components/common/review-list/review-card-list';

const mockDataList: ReviewCardProps[] = [
  {
    id: 1,
    score: 5.5,
    comment: '완벽해요',
    createdAt: new Date(),
    user: {
      id: 1,
      name: '샘플유저',
      image: './cat.jpg',
    },
  },
  {
    id: 2,
    score: 8,
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
