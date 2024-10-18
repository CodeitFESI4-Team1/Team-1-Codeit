'use client';

import { useState } from 'react';

import GNBPresenter from '@/src/components/common/gnb/presenter';

export default function GNB() {
  const [hasCookie, setHasCookie] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setHasCookie(false);
    setIsDropdownOpen(false);
  };

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <GNBPresenter
      hasCookie={hasCookie}
      handleLogout={handleLogout}
      handleDropdown={handleDropdown}
      isDropdownOpen={isDropdownOpen}
    />
  );
}
