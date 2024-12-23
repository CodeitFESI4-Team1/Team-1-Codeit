import { Modal, ScrollArea } from '@mantine/core';
import CreateGatheringForm from '@/src/app/(crew)/crew/detail/[id]/_components/create-gathering/create-gathering-form';
import { CreateGatheringFormTypes } from '@/src/types/gathering-data';

export interface GatheringDetailModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (data: CreateGatheringFormTypes) => void;
  onEdit: () => void;
  data: CreateGatheringFormTypes;
}

export default function CreateGatheringModalPresenter({
  opened,
  onClose,
  onSubmit,
  onEdit,
  data,
}: GatheringDetailModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      title="약속 만들기"
      styles={{
        root: { '--modal-size': '520px' },
        content: {
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
        },
      }}
      classNames={{
        body: 'p-0',
        title: 'text-xl font-semibold text-gray-900',
      }}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <div className="flex flex-col gap-8 p-6">
        <CreateGatheringForm data={data} onSubmit={onSubmit} onEdit={onEdit} onClose={onClose} />
      </div>
    </Modal>
  );
}
