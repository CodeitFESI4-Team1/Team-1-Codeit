import { MouseEvent } from 'react';
import Image from 'next/image';
import { Badge } from '@mantine/core';
import { cn } from '@/src/utils/cn';
import { formatDate } from '@/src/utils/format-date';
import Button from '@/src/components/common/input/button';
import LikeBtn from '@/src/components/common/input/button/like-btn';
import IcoPerson from '@/public/assets/icons/person.svg';
import IcoTimer from '@/public/assets/icons/timer.svg';

// TODO: 스케레톤UI 적용(처음 로딩시 카드가 늘어나는 현상)

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
  const { date, time } = formatDate(dateTime);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onLikeToggle();
  };

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
      className={cn(
        className,
        'relative h-[310px] w-full overflow-hidden rounded-lg border-white bg-white shadow-sm',
        isPast ? 'pointer-events-none cursor-default' : 'cursor-pointer',
      )}
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

      {isWithin24Hours && (
        <div className="absolute right-0 top-0 flex items-center space-x-1 bg-blue-600 px-4 py-2 text-white">
          <Image src={IcoTimer} alt="timer icon" width={16} height={16} />
          <p className="text-base font-medium">{deadlineMessage}</p>
        </div>
      )}

      <div className="flex min-h-[150px] flex-col justify-between p-4">
        <div>
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <div className="mb-2 flex items-center space-x-1 text-base font-medium text-gray-700">
            <span className="-translate-y-[2px] leading-none tracking-tighter">|</span>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{location}</p>
          </div>
          <div className="space-x-2">
            <Badge
              size="lg"
              color="#111827"
              radius="sm"
              classNames={{
                label: 'font-pretendard, gathering-badge',
              }}
            >
              {date}
            </Badge>
            <Badge
              size="lg"
              color="#111827"
              radius="sm"
              classNames={{
                label: 'font-pretendard, gathering-badge',
              }}
            >
              {time}
            </Badge>
          </div>
        </div>
        <p className="flex items-center text-base font-medium text-gray-700">
          <Image src={IcoPerson} alt="person icon" width={16} height={16} />
          참여인원 {currentCount}/{totalCount}
        </p>
      </div>

      <div className="absolute bottom-4 right-4">
        <LikeBtn id={id} isLiked={isLiked} onLikeToggle={onLikeToggle} size={40} />
      </div>

      {isPast && (
        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-70 text-white">
          <div className="text-center">
            <p className="mb-2 text-lg font-semibold">마감된 모임입니다</p>
            <p className="mb-4 text-sm">다음 기회에 만나요 🙏</p>
            <Button type="button" className="btn-filled px-4" onClick={handleClick}>
              모임 보내주기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
