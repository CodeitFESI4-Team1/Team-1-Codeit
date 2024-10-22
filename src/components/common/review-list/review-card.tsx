import { User } from '@/src/types/ReviewList';
import Heart from '@/public/assets/icon/ic-heart';

/**
 * ReviewCard 컴포넌트
 *
 * @param {number} [props.score] - 평점
 * @param {string} [props.comment] - 리뷰 내용
 * @param {Date} [props.createdAt] - 게시 일시
 * @param {User} [props.user] - 게시인
 * @returns {JSX.Element} - ReviewCard
 */

interface ReviewCardProps {
  score: number;
  comment: string;
  createdAt: Date;
  user: User;
}

// NOTE: 추후 reviewHeart 컴포넌트로 교체
function MockScore({ score }: { score: number }) {
  const filledHearts = Math.ceil((score / 100) * 5);

  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Heart key={`${score - index}`} fill={index < filledHearts ? '#EA580C' : '#E5E7EB'} />
      ))}
    </div>
  );
}

export default function ReviewCard({ score, comment, createdAt, user }: ReviewCardProps) {
  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}.${mm}.${dd}`;
  };

  const reviewDate = formatDate(createdAt);

  return (
    <div className="flex w-full flex-col items-start border-[2px] border-gray-400 px-[60px] py-4">
      <MockScore score={score} />
      <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
      <div className="flex items-center text-xs">
        <span className="h-6 w-6 rounded-full bg-red-500">
          <img src={user.image} alt={user.name} />
        </span>
        <span className="relative block w-fit px-2 after:absolute after:right-0 after:content-['|']">
          {user.name}
        </span>
        <span className="ml-3 text-gray-500">{reviewDate}</span>
      </div>
    </div>
  );
}
