import Image from 'next/image';
import { ParticipantType } from '@/src/types/writable-gathering-card';
import person from '@/public/assets/icons/person.svg';
import Button from '../button';
import Profiles from '../crew-list/profiles';

interface WritableGatheringCardProps {
  id: number;
  gatheringName: string;
  dateTime: string;
  currentCount: number;
  totalCount: number;
  imageUrl: string;
  participants: ParticipantType[];
}

// NOTE: 추후 합치기
export function formatDateWithYear(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
}

export default function WritableGatheringCard({
  id,
  currentCount,
  dateTime,
  gatheringName,
  imageUrl,
  participants,
  totalCount,
}: WritableGatheringCardProps) {
  const { year, month, day } = formatDateWithYear(dateTime);
  return (
    <div className="flex w-full max-w-[1200px] gap-[20px] border-b-[2px] border-b-gray-200 py-[24px]">
      <span className="relative h-[166px] w-[294px] overflow-hidden rounded-[12px]">
        <Image src={imageUrl} alt={gatheringName} fill objectFit="cover" />
      </span>
      <div className="flex w-full items-end justify-between">
        <div className="flex h-full flex-col items-start justify-between">
          <div>
            <div className="mb-[15px] flex items-center">
              <span className="text-xl font-semibold text-gray-800">{gatheringName} |</span>
              <span className="ml-2 text-base font-medium text-gray-700">위치</span>
            </div>
            <div className="flex w-fit items-center">
              <span className="relative inline-block h-[20px] w-[20px]">
                <Image alt="참여 인원" src={person} fill objectFit="contain" />
              </span>
              <span className="mr-[22px] text-base font-medium text-gray-700">
                {currentCount}/{totalCount}
              </span>
              {/* NOTE: participants prop 넘겨줘야함 */}
              <Profiles id={2} />
            </div>
          </div>
          <div className="text-sm font-medium text-gray-700">{`${year}년 ${month}월 ${day}일`}</div>
        </div>
        <Button className="bg-blue-500 p-[6px_14px] text-base font-semibold text-white">
          리뷰 작성하기
        </Button>
      </div>
    </div>
  );
}
