import Heart from '@/public/assets/icon/ic-heart';

export interface ReviewUser {
  id: number;
  name: string;
  image: string;
}

export interface ReviewCardProps {
  score: number;
  comment: string;
  createdAt: Date;
  user: ReviewUser;
}

export interface ReviewCardListProps {
  reviewList: ReviewCardProps[];
}

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

// 상위 컴포넌트(리뷰 카드 리스트)에서 리뷰 정보를 받아 렌더
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
