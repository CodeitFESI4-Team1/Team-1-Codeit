import Image from 'next/image';
import { Badge } from '@mantine/core';
import { formatDate } from '@/src/utils/format-date';
import { GatheringCardProps } from '@/src/types/gathering-data';
import IcoPerson from '@/public/assets/icons/ic-gathering-person.svg';
import Button from '../../input/button';

interface ScheduledGatheringCardPresenterProps {
  data: GatheringCardProps;
  onClick: () => void;
}

export default function ScheduledGatheringCardPresenter({
  data,
  onClick,
}: ScheduledGatheringCardPresenterProps) {
  const { crewTitle, title, dateTime, location, currentCount, totalCount, imageUrl } = data;

  const { date, dayOfWeek, time } = formatDate(dateTime);

  return (
    <div className="space-y-2">
      <span className="text-xl font-semibold text-gray-800">{crewTitle}</span>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="h-80 cursor-pointer items-center rounded-xl bg-white shadow-xs md:flex md:h-44"
      >
        <div className="relative h-1/2 w-full flex-shrink-0 overflow-hidden rounded-t-lg md:h-full md:w-1/3 md:rounded-l-lg md:rounded-r-none">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="flex h-1/2 w-full min-w-0 flex-grow flex-col justify-between p-4 md:h-full">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            <div className="mb-2 flex items-center space-x-2 text-sm font-semibold text-blue-500 md:text-base">
              <p>{`${date} ${dayOfWeek}`}</p>
              <div className="h-[18px] w-[1px] bg-gray-300" />
              <p>{time}</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 md:text-xl">{title}</h3>
            <p className="text-xm mb-2 font-normal text-gray-700">{location}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-end space-x-1 pb-2 md:pb-0">
              <Image src={IcoPerson} alt="person icon" width={16} height={16} className="pb-0.5" />
              <p className="text-sm font-normal text-gray-900">
                참여인원 <span className="text-blue-500">{currentCount}</span>/{totalCount}
              </p>
            </div>
            <Button className="lg:w-1/ btn-filled w-40 md:w-1/2" onClick={onClick}>
              약속 자세히 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
