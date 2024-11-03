import { ReactNode } from 'react';
import { Modal } from '@mantine/core';
import Button from '@/src/components/common/button/index';

interface ConfirmCancelModalProps {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel?: () => void;
}

/**
 * ConfirmCancelModal 컴포넌트
 *
 * @param {ReactNode} children - 모달 안에 들어갈 내용
 * @param {boolean} opened - 모달이 열려있는지 여부
 * @param {() => void} onClose - 모달을 닫기 위한 함수
 * @param {() => void} onConfirm - 확인 버튼을 클릭했을 때 실행되는 함수
 * @param {() => void} [onCancel] - 취소 버튼을 클릭했을 때 실행되는 함수
 *
 * import { useDisclosure } from '@mantine/hooks';사용
 *
 * <ConfirmCancelModal
 *   opened={confirmCancelOpened}
 *   onClose={closeConfirmCancel}
 *   onConfirm={handleConfirmCancel}
 *   onCancel={handleCancel}
 * >
 *   {children}
 * </ConfirmCancelModal>
 *
 */

export default function ConfirmCancelModal({
  children,
  opened,
  onClose,
  onConfirm,
  onCancel,
}: ConfirmCancelModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleCancel}
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
      <div className="space-y-8 text-center">
        <div className="my-9">{children}</div>
        <div className="flex justify-center space-x-2">
          <Button className="btn-outlined w-32" onClick={handleCancel}>
            취소
          </Button>
          <Button className="btn-filled w-32" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
}
