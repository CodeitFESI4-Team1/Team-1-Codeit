import Image from 'next/image';
import { Button, Modal, ScrollArea } from '@mantine/core';
import { formatDate } from '@/src/utils/format-date';
import { GatheringDetailType } from '@/src/types/gathering-data';
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
        <figure className="relative aspect-video w-full">
          <Image
            src={data.imageUrl}
            alt="모임 이미지"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </figure>
        <div className="flex flex-col gap-8 p-6">
          <section>
            <hgroup className="items-center gap-2 md:flex">
              <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
              <i
                className="hidden text-xl font-semibold not-italic text-gray-800 md:flex"
                aria-hidden="true"
              >
                |
              </i>
              <h3 className="text-base font-medium text-gray-700">{data.location}</h3>
            </hgroup>
            <p className="mb-6 mt-2.5 flex gap-2 text-base font-semibold">
              <span className="rounded-[4px] bg-gray-900 px-2 py-0.5 text-white">
                {formatDate(data.dateTime).date}
              </span>
              <span className="rounded-[4px] bg-gray-900 px-2 py-0.5 text-white">
                {formatDate(data.dateTime).time}
              </span>
            </p>
            <p className="text-base font-medium text-gray-700">{data.introduce}</p>
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
                참여인원 {data.currentCount}/{data.totalCount}
              </span>
            </h3>
            <ScrollArea h={152}>
              <ul className="grid grid-cols-2 gap-4">
                {data.participants.map((participant) => (
                  <li key={participant.id} className="flex items-center gap-2">
                    <figure className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={participant.imageUrl}
                        alt="유저 이미지"
                        fill
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </figure>
                    <span className="text-base font-medium">{participant.nickName}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </section>
          <footer className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              w={118}
              h={44}
              className="rounded-xl border-blue-500 text-base font-medium text-blue-500"
            >
              취소
            </Button>
            <Button
              onClick={onJoin}
              w={118}
              h={44}
              className="rounded-xl bg-blue-500 text-base font-medium"
            >
              참여
            </Button>
            <Button
              onClick={onExit}
              w={118}
              h={44}
              className="rounded-xl bg-blue-500 text-base font-medium"
            >
              탈퇴
            </Button>
            <Button
              onClick={onDelete}
              w={118}
              h={44}
              className="rounded-xl bg-blue-500 text-base font-medium"
            >
              삭제
            </Button>
          </footer>
        </div>
      </div>
    </Modal>
  );
}
