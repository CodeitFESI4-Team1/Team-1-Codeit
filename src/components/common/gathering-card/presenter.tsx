import Image from 'next/image';
import { formatDate } from '@/src/utils/format-date';
import IcoPerson from '@/public/assets/icons/person.svg';

export interface GatheringCardPresenterProps {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  currentCount: number;
  totalCount: number;
  isLiked: boolean;
  onLikeToggle: () => void;
  onClick: () => void;
  isPast: boolean;
  className?: string;
}

export default function GatheringCardPresenter({
  imageUrl,
  title,
  date,
  location,
  currentCount,
  totalCount,
  isLiked,
  onLikeToggle,
  onClick,
  isPast,
  className,
}: GatheringCardPresenterProps) {
  const formattedDate = formatDate(date);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={isPast ? undefined : onClick}
      onKeyDown={(e) => {
        if (!isPast && (e.key === 'Enter' || e.key === ' ')) {
          onClick();
        }
      }}
      className={` ${className} relative w-full overflow-hidden rounded-lg border-white bg-white ${isPast ? 'pointer-events-none' : ''} ${isPast ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* 카드 내용 */}
      <div className="px-3 py-4">
        <h3 className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <p className="whitespace-nowrap tracking-tighter">{formattedDate}</p>
          <span className="tracking-tighter text-gray-300">|</span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">{location}</p>
        </div>
        <p className="mt-2 flex items-center text-sm text-gray-700">
          <Image src={IcoPerson} alt="person icon" width={16} height={16} />
          참여인원 {currentCount}/{totalCount}
        </p>
      </div>

      <button
        type="button"
        className="absolute right-2 top-2"
        onClick={(e) => {
          e.stopPropagation();
          onLikeToggle();
        }}
      >
        {isLiked ? '♥' : '♡'}
      </button>

      {isPast && (
        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-70 text-white">
          <div className="text-center">
            <p className="mb-2 text-lg font-semibold">마감된 모임입니다</p>
            <p className="mb-4 text-sm">다음 기회에 만나요 🙏</p>
            {/* '모임 보내주기' 버튼 */}
            <button
              type="button"
              className="rounded-lg bg-indigo-500 px-4 py-2 text-white"
              onClick={(e) => {
                e.stopPropagation();
                alert('모임이 종료되었습니다.');
              }}
            >
              모임 보내주기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
