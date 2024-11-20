import Image from 'next/image';
import { Badge } from '@mantine/core';
import { formatDate } from '@/src/utils/format-date';
import LikeBtn from '@/src/components/common/input/button/like-btn';
import IcoPerson from '@/public/assets/icons/person.svg';

interface ScheduledGatheringCardPresenterProps {
  data: {
    id: number;
    crewTitle: string;
    crewMainLocation: string;
    crewSubLocation: string;
    title: string;
    dateTime: string;
    currentCount: number;
    totalCount: number;
    imageUrl: string;
    liked: boolean;
  };
  onClick: () => void;
}

export default function ScheduledGatheringCardPresenter({
  data,
  onClick,
}: ScheduledGatheringCardPresenterProps) {
  const {
    id,
    crewTitle,
    crewMainLocation,
    crewSubLocation,
    title,
    dateTime,
    currentCount,
    totalCount,
    imageUrl,
    liked,
  } = data;

  const { date, time } = formatDate(dateTime);

  return (
    <div className="space-y-2">
      <div className="ml-2 flex items-center">
        <span className="text-xl font-semibold text-gray-800">{crewTitle}</span>
        <div className="ml-2 mr-1 h-[18px] w-[2px] bg-black" />
        <span className="text-base font-medium text-gray-700">
          {crewMainLocation} {crewSubLocation}
        </span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="relative flex h-44 cursor-pointer items-center space-x-4 rounded-xl bg-white p-6 shadow-xs md:space-x-6 lg:space-x-6"
      >
        {/* Image Section */}
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg md:h-32 md:w-32 lg:h-32 lg:w-32">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex h-full w-full min-w-0 flex-grow flex-col justify-between">
          <div className="space-y-2">
            <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold text-gray-800">
              {title}
            </h3>
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
      </div>
    </div>
  );
}
