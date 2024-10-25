import Image from 'next/image';
import { formatDate } from '@/src/utils/format-date';

/**
 * MiniGatheringCard 내가 참여한모임, 내가만든 모임에서 사용
 *
 * @param {string} title - 모임의 제목
 * @param {string} date - 모임 날짜 `formatDate` 함수로 포맷
 * @param {string} location - 모임 장소
 * @param {number} currentCount - 현재 참여 인원의 수
 * @param {number} totalCount - 모임의 총 인원 수
 * @param {string} imageUrl - 모임의 이미지 URL
 * @param {() => void} onClick - 클릭 시 호출되는 함수
 */
interface MiniGatheringCardProps {
  title: string;
  date: string;
  location: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  onClick?: () => void;
}

export default function MiniGatheringCard({
  title,
  date,
  location,
  currentCount,
  totalCount,
  imageUrl,
  onClick,
}: MiniGatheringCardProps) {
  return (
    <div
      className="flex w-full max-w-full cursor-pointer items-center space-x-3 overflow-hidden border border-gray-200 p-3"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => ['Enter', ' '].includes(e.key) && onClick?.()}
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
          {title}
        </h4>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <p className="whitespace-nowrap tracking-tighter">{formatDate(date)}</p>
          <span className="tracking-tighter text-gray-300">|</span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">{location}</p>
        </div>
        <p className="text-xs text-gray-500">
          참여 인원 {currentCount} / {totalCount}
        </p>
      </div>
    </div>
  );
}
