import Image from 'next/image';
import { Modal, ScrollArea } from '@mantine/core';
import { formatDate } from '@/src/utils/format-date';
import isToday from '@/src/utils/is-today';
import Button from '@/src/components/common/input/button';
import { Profile } from '@/src/components/common/profile';
import { GatheringDetailType } from '@/src/types/gathering-data';
import IcoClock from '@/public/assets/icons/ic-clock.svg';
import IcoPerson from '@/public/assets/icons/ic-gathering-person.svg';

export interface GatheringDetailModalProps {
  opened: boolean;
  onClose: () => void;
  onJoin: () => void;
  onExit: () => void;
  onDelete: () => void;
  data: GatheringDetailType;
}

export default function GatheringDetailModalPresenter({
  opened,
  onClose,
  onJoin,
  onExit,
  onDelete,
  data,
}: GatheringDetailModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      centered
      styles={{
        root: { '--modal-size': '520px' },
        content: { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', borderRadius: '12px' },
      }}
      classNames={{
        body: 'p-0',
      }}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <div>
        <figure className="relative aspect-video w-full overflow-hidden">
          <Image
            src={data?.imageUrl}
            alt="모임 이미지"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {isToday(data?.dateTime) && (
            <strong className="absolute right-0 top-0 flex items-center gap-2 bg-blue-600 px-4 py-2 text-base font-medium text-white">
              <Image src={IcoClock} width={15} height={13} alt="아이콘" />
              <span>
                오늘 {formatDate(data?.dateTime).time.split(':')[0]}시{' '}
                {formatDate(data?.dateTime).time.split(':')[1]}분 마감
              </span>
            </strong>
          )}
        </figure>
        <div className="flex flex-col gap-8 p-6">
          <section>
            <div className="mb-2 flex items-center space-x-2">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-blue-500">
                {`${formatDate(data?.dateTime).date} ${formatDate(data?.dateTime).dayOfWeek}`}
              </p>
              <div className="h-[18px] w-[1px] bg-gray-300" />
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-blue-500">
                {formatDate(data?.dateTime).time}
              </p>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{data?.title}</h2>
            <h3 className="text-base font-medium text-gray-700">{data?.location}</h3>
            <div className="mt-4 w-full border-gray-200">
              <p className="text-base font-semibold text-blue-500">약속 공지사항</p>
              <div className="overflow-y-auto text-base font-medium text-gray-700">
                {data?.introduce || '소개 정보가 없습니다.'}
              </div>
            </div>
          </section>
          <section className="text-gray-700">
            <h3 className="mb-4 flex items-center space-x-1">
              <Image src={IcoPerson} alt="person icon" width={20} height={20} />
              <p className="text-base font-medium text-gray-700">
                참여인원 <span className="text-blue-500">{data?.currentCount}</span>/
                {data?.totalCount}
              </p>
            </h3>
            <ScrollArea h={152}>
              <ul className="grid grid-cols-2 gap-4">
                {data?.participants.map((participant) => (
                  <li key={participant.id} className="flex items-center gap-2">
                    <figure className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Profile imageUrl={participant?.profileImageUrl} />
                    </figure>
                    <span className="text-base font-medium">{participant?.nickname}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </section>
          <footer className="flex items-center justify-center gap-3">
            <Button
              type="button"
              onClick={onClose}
              className="btn-outlined h-11 w-29.5 text-base font-medium"
            >
              닫기
            </Button>
            {!data?.participant && (
              <Button
                type="button"
                onClick={onJoin}
                className="btn-filled h-11 w-29.5 text-base font-medium"
              >
                참여하기
              </Button>
            )}
            {data?.participant && !data?.gatheringCaptain && (
              <Button
                type="button"
                onClick={onExit}
                className="btn-filled h-11 w-29.5 text-base font-medium"
              >
                약속 취소하기
              </Button>
            )}
            {data?.gatheringCaptain && (
              <Button
                type="button"
                onClick={onDelete}
                className="btn-filled h-11 w-29.5 text-base font-medium"
              >
                약속 삭제하기
              </Button>
            )}
          </footer>
        </div>
      </div>
    </Modal>
  );
}
