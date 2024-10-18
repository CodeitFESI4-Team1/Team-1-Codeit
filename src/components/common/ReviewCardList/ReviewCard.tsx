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

function MockScore({ score }: { score: number }) {
  return <p>{score}</p>;
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
    <div>
      <MockScore score={score} />
      <p>{comment}</p>
      <div>
        <span>
          <img src={user.image} alt={user.name} />
        </span>
        <span>{user.name}</span>
        <span>{reviewDate}</span>
      </div>
    </div>
  );
}
