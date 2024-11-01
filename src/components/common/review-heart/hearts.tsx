import Heart from '@/public/assets/icons/ic-heart';

export default function ReviewHearts({ score }: { score: number }) {
  const filledHearts = Math.ceil((score / 100) * 5);
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Heart key={`${score - index}`} fill={index < filledHearts ? '#3388FF' : '#E5E7EB'} />
      ))}
    </div>
  );
}
