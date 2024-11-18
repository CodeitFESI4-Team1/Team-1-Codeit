'use client';

import Image from 'next/image';
import { cn } from '@/src/utils/cn';
import defaultImage from '@/public/assets/icons/default-profile.svg';
import editImage from '@/public/assets/icons/ic-edit.svg';

interface ProfileProps {
  size?: 'small' | 'header' | 'large' | 'full';
  imageUrl?: string;
  editable?: boolean;
  onClick?: () => void;
}

export function Profile({ size = 'full', imageUrl, editable = false, onClick }: ProfileProps) {
  const finalSize = editable ? 'full' : size;

  const sizeClasses = {
    small: 'w-6 h-6',
    header: 'sm:w-7 sm:h-7 md:w-[40px] md:h-[40px] lg:w-[40px] lg:w-[40px]',
    large: 'w-14 h-14',
    full: 'w-full h-full',
  };

  return (
    <div
      className={cn(
        'relative inline-block rounded-full',
        sizeClasses[size],
        editable && 'editable-gradient-border shadow-sm',
      )}
    >
      <button
        type="button"
        className={cn(
          'relative overflow-hidden rounded-full',
          sizeClasses[finalSize],
          size !== 'header' && 'pointer-events-none',
        )}
        onClick={size === 'header' ? onClick : undefined}
      >
        <div className="relative h-full w-full rounded-full">
          <Image
            src={imageUrl && imageUrl.trim() ? imageUrl : defaultImage}
            alt="프로필 이미지"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </button>
      {editable && (
        <button
          type="button"
          className="absolute -bottom-1 -right-1 z-20 h-8 w-8 cursor-pointer rounded-full md:-right-1 md:bottom-2 lg:-right-1 lg:bottom-2"
        >
          <Image src={editImage} alt="수정 버튼" width={30} height={30} />
        </button>
      )}
    </div>
  );
}
