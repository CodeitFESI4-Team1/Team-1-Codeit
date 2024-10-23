import ReviewCard, { ReviewList } from './review-card';

/**
 * ReviewCardList 컴포넌트
 *
 * @param {ReviewList} reviewList - 리뷰 리스트 데이터 배열
 * @param {boolean} [props.clickable] - 클릭가능여부, 클릭 시 해당 모임이 포함된 크루 페이지로 이동, 기본값 'false'
 * @param {boolean} [props.imageAvailable] - 썸네일 이미지 유무, 기본값 'true'
 * @returns {JSX.Element} : ReviewCardList
 */

interface ReviewCardListProps {
  reviewList: ReviewList;
  clickable?: boolean;
  imageAvailable?: boolean;
}

// 리뷰 리스트[]를 prop으로 받아 리뷰 카드에 정보를 넘겨준 후 리스트 형식으로 렌더
export default function ReviewCardList({
  reviewList,
  clickable = false,
  imageAvailable = false,
}: ReviewCardListProps) {
  return (
    <ul className="mx-auto w-[343px] md:w-[820px] lg:w-[1200px]">
      {reviewList.map((review, index) => (
        <li key={`${review.score - index}`}>
          <ReviewCard
            score={review.score}
            comment={review.comment}
            createdAt={review.createdAt}
            user={review.user}
            imageAvailable={imageAvailable}
            clickable={clickable}
            gatheringId={review.gathering.id}
          />
        </li>
      ))}
    </ul>
  );
}
