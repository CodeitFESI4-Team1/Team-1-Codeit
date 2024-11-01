import { Modal } from '@mantine/core';
import CreateGatheringForm from '@/src/app/crew/_components/create-gathering-form';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';

export interface GatheringDetailModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onEdit: () => void;
  data: CreateGatheringRequestType;
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
        <div className="flex flex-col gap-8 p-6">
          <CreateGatheringForm data={data} onSubmit={onSubmit} onEdit={onEdit} />
        </div>
      </div>
    </Modal>
  );
}
