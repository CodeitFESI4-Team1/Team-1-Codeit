import { ReactNode } from 'react';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export interface ModalProps {
  children: ReactNode;
  openModal: () => void;
}

export default function ModalContainer({ children, openModal }: ModalProps) {
  const [opened, { close }] = useDisclosure(false);

  const handleOpen = () => {
    openModal();
  };

  return (
    <>
      <Modal opened={opened} withCloseButton={false} onClose={close}>
        {children}
      </Modal>
    </>
  );
}
