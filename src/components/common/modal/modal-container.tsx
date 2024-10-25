'use client';

import React, { useState } from 'react';
import { CloseButton, Modal } from '@mantine/core';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      centered
      withCloseButton={false}
      size="auto"
      overlayProps={{ backgroundOpacity: 0.5 }}
    >
      {children}
    </Modal>
  );
}
