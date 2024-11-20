import CrewSkeleton from '../crew-skeleton';

interface CrewSkeletonListProps {
  num: number;
  column?: number;
}

export default function CrewSkeletonList({ num, column }: CrewSkeletonListProps) {
  const columnStyle = column === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1';
  return (
    <div className={`grid grid-cols-1 gap-2 ${columnStyle}`}>
      {[...Array(num)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CrewSkeleton key={index} />
      ))}
    </div>
  );
}
