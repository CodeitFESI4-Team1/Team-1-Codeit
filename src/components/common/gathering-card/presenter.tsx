import { MouseEvent } from 'react';
import Image from 'next/image';
import { Badge } from '@mantine/core';
import { cn } from '@/src/utils/cn';
import { formatDate } from '@/src/utils/format-date';
import Button from '@/src/components/common/input/button';
import LikeBtn from '@/src/components/common/input/button/like-btn';
import IcoPerson from '@/public/assets/icons/ic-gathering-person.svg';
import IcoTimer from '@/public/assets/icons/timer.svg';

export interface GatheringCardPresenterProps {
  id: number;
  imageUrl: string;
  title: string;
  dateTime: string;
  location: string;
  currentCount: number;
  totalCount: number;
  isLiked: boolean;
  onLikeToggle: () => void;
  onClick: () => void;
  isPast: boolean;
  isWithin24Hours?: boolean;
  deadlineMessage?: string;
  className?: string;
}

export default function GatheringCardPresenter({
  id,
  imageUrl,
  title,
  dateTime,
  location,
  currentCount,
  totalCount,
  isLiked,
  onLikeToggle,
  onClick,
  isPast,
  isWithin24Hours,
  deadlineMessage,
  className,
}: GatheringCardPresenterProps) {
  const { date, dayOfWeek, time } = formatDate(dateTime);

  const handleLikeClick = (e: MouseEvent) => {
    e.stopPropagation();
    onLikeToggle();
  };

  return (
    <div
      className={cn(
        className,
        'relative h-[380px] w-full overflow-hidden rounded-lg border-white bg-white shadow-sm',
      )}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>

      {isWithin24Hours && (
        <div className="absolute right-0 top-0 flex items-center space-x-1 bg-blue-600 px-4 py-2 text-white">
          <Image src={IcoTimer} alt="timer icon" width={16} height={16} />
          <p className="text-base font-medium">{deadlineMessage}</p>
        </div>
      )}

      <div className="flex min-h-[220px] flex-col justify-between p-4">
        <div>
          <div className="flex items-center space-x-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-blue-500">
              {`${date} ${dayOfWeek}`}
            </p>
            <div className="h-[18px] w-[1px] bg-gray-300" />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-blue-500">
              {time}
            </p>
          </div>
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap pt-1 text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <div className="text-xm mb-2 flex items-center space-x-1 font-normal text-gray-700">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{location}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-1">
            <Image src={IcoPerson} alt="person icon" width={16} height={16} />
            <p className="text-sm font-normal text-gray-900">
              참여인원 <span className="text-blue-500">{currentCount}</span>/{totalCount}
            </p>
          </div>
          <Button className="btn-filled w-full" onClick={onClick}>
            약속 자세히 보기
          </Button>
        </div>
      </div>

      <div className="absolute bottom-[68px] right-4">
        <LikeBtn id={id} isLiked={isLiked} onLikeToggle={onLikeToggle} size={32} />
      </div>

      {isPast && (
        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-70 text-white">
          <div className="text-center">
            <p className="mb-2 text-lg font-semibold">마감된 약속입니다</p>
            <p className="mb-4 text-sm">다음 기회에 만나요 🙏</p>
            <Button type="button" className="btn-filled px-4" onClick={handleLikeClick}>
              약속 보내주기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
