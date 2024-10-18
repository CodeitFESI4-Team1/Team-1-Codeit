import { ReviewCardProps } from './review-card';

interface ReviewCardListProps {
  reviewList: ReviewCardProps[];
}

// 리뷰 리스트[]를 prop으로 받아 리뷰 카드에 정보를 넘겨준 후 리스트 형식으로 렌더
export default function ReviewCardList({ reviewList }: ReviewCardListProps) {
  return <></>;
}
