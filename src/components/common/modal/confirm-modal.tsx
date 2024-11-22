import { ReactNode } from 'react';
import { Modal } from '@mantine/core';
import Button from '@/src/components/common/button';

interface ConfirmModalProps {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * ConfirmModal
 *
 * @param {ReactNode} children - 모달 안에 들어갈 내용
 * @param {boolean} opened - 모달이 열려있는지 여부
 * @param {() => void} onClose - 모달을 닫기 위한 함수
 * @param {() => void} onConfirm - 확인 버튼을 클릭했을 때 실행되는 함수
 *
 * import { useDisclosure } from '@mantine/hooks';사용
 *
 * <ConfirmModal opened={confirmOpened} onClose={closeConfirm} onConfirm={handleConfirm}>
 *   {children}
 * </ConfirmModal>
 *
 */

export default function ConfirmModal({ children, opened, onClose, onConfirm }: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      size="xs"
      styles={{
        content: { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', borderRadius: '12px' },
      }}
      overlayProps={{
        opacity: 0.5,
        blur: 2,
      }}
    >
      <div className="space-y-8 p-4 text-center">
        <div>{children}</div>
        <div className="flex justify-end">
          <Button className="btn-filled w-full" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
}
