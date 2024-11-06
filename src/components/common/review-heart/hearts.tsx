import Heart from '@/public/assets/icons/ic-heart';

export default function ReviewHearts({ score }: { score: number }) {
  const filledHearts = Math.round(score);
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Heart key={index} fill={index < filledHearts ? '#3388FF' : '#E5E7EB'} />
      ))}
    </div>
  );
}
