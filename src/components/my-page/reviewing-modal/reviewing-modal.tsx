'use client';

import React from 'react';
import { Modal } from '@mantine/core';
import ReviewForm from './review-form';

export interface ReviewingModalProps {
  gatheringId?: number;
  opened: boolean;
  close: () => void;
}

export default function ReviewingModal({ gatheringId, opened, close }: ReviewingModalProps) {
  return (
    <Modal
      opened={opened}
      centered
      title="리뷰 쓰기"
      onClose={close}
      size="auto"
      padding={24}
      radius={12}
      overlayProps={{ backgroundOpacity: 0.5 }}
      styles={{
        title: {
          fontWeight: 600,
          fontSize: '1.125rem',
        },
        body: {
          fontFamily: 'var(--font-pretendard)',
        },
      }}
    >
      <ReviewForm onCancel={close} />
    </Modal>
  );
}
