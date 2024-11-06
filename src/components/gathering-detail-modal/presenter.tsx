import Image from 'next/image';
import { Modal, ScrollArea } from '@mantine/core';
import { formatDate } from '@/src/utils/format-date';
import isToday from '@/src/utils/is-today';
import Button from '@/src/components/common/button';
import { Profile } from '@/src/components/common/profile';
import { GatheringDetailType } from '@/src/types/gathering-data';
import IcoClock from '@/public/assets/icons/ic-clock.svg';
import IcoUser from '@/public/assets/icons/ic-user.svg';

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
    >
      <div>
        <ScrollArea h={640}>
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
                <span>오늘 {new Date(data?.dateTime).getHours()}시 마감</span>
              </strong>
            )}
          </figure>
          <div className="flex flex-col gap-8 p-6">
            <section>
              <hgroup>
                <h2 className="text-xl font-semibold text-gray-800 md:mr-2 md:inline-block">
                  {data?.title}
                </h2>

                <h3 className="text-base font-medium text-gray-700 md:inline-block">
                  <i
                    className="mr-2 hidden text-xl font-semibold not-italic text-gray-800 md:inline-block"
                    aria-hidden="true"
                  >
                    |
                  </i>
                  <span>{data?.location}</span>
                </h3>
              </hgroup>
              <p className="mb-6 mt-2.5 flex gap-2 text-base font-semibold">
                <span className="rounded-[4px] bg-gray-900 px-2 py-0.5 text-white">
                  {formatDate(data?.dateTime).date}
                </span>
                <span className="rounded-[4px] bg-gray-900 px-2 py-0.5 text-white">
                  {formatDate(data?.dateTime).time}
                </span>
              </p>
              <p className="text-base font-medium text-gray-700">{data?.introduce}</p>
            </section>
            <section className="text-gray-700">
              <h3 className="mb-4 flex items-center text-base font-medium">
                <figure className="relative h-[20px] w-[20px]">
                  <Image
                    src={IcoUser}
                    fill
                    alt="아이콘"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <span>
                  참여인원 {data?.currentCount}/{data?.totalCount}
                </span>
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
              {!data?.isParticipant && (
                <Button
                  type="button"
                  onClick={onJoin}
                  className="btn-filled h-11 w-29.5 text-base font-medium"
                >
                  참여하기
                </Button>
              )}
              {data?.isParticipant && !data?.isGatherCaptain && (
                <Button
                  type="button"
                  onClick={onExit}
                  className="btn-filled h-11 w-29.5 text-base font-medium"
                >
                  탈퇴하기
                </Button>
              )}
              {data?.isGatherCaptain && (
                <Button
                  type="button"
                  onClick={onDelete}
                  className="btn-filled h-11 w-29.5 text-base font-medium"
                >
                  삭제하기
                </Button>
              )}
            </footer>
          </div>
        </ScrollArea>
      </div>
    </Modal>
  );
}
