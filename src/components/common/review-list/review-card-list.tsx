import ReviewCard, { ReviewCardListProps } from './review-card';

// 리뷰 리스트[]를 prop으로 받아 리뷰 카드에 정보를 넘겨준 후 리스트 형식으로 렌더
export default function ReviewCardList({ reviewList }: ReviewCardListProps) {
  return (
    <ul className="mx-auto w-[343px] md:w-[820px] lg:w-[1200px]">
      {reviewList.map((review) => (
        <li key={review.id}>
          <ReviewCard
            score={review.score}
            comment={review.comment}
            createdAt={review.createdAt}
            user={review.user}
          />
        </li>
      ))}
    </ul>
  );
}
