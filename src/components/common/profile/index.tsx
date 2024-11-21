'use client';

import Image from 'next/image';
import { cn } from '@/src/utils/cn';
import defaultImage from '@/public/assets/icons/default-profile.svg';
import captainCheck from '@/public/assets/icons/ic-captain-check.svg';
import editImage from '@/public/assets/icons/ic-edit.svg';

/**
 * Profile 컴포넌트
 *
 * @param {Object} props - Profile 컴포넌트의 props
 * @param {'small' | 'medium' | 'large'} [props.size='large'] - 프로필의 크기를 결정 기본값은 'large'
 * @param {string} [props.imageUrl] - 이미지 URL을 설정 없으면 기본 이미지
 * @param {boolean} [props.editable=false] - 프로필 편집시 사용
 * @param {boolean} [props.isCaptain=false] - 캡틴 여부를 판단
 * @param {() => void} [props.onClick] - 프로필을 클릭
 */

interface ProfileProps {
  size?: 'small' | 'header' | 'large' | 'full';
  imageUrl?: string;
  editable?: boolean;
  isCaptain?: boolean;
  onClick?: () => void;
  priority?: boolean;
}

export function Profile({
  size = 'full',
  imageUrl,
  editable = false,
  isCaptain = false,
  onClick,
  priority = false,
}: ProfileProps) {
  let finalSize = size;
  if (editable) {
    finalSize = 'full';
  } else if (isCaptain) {
    finalSize = 'large';
  }
  const sizeClasses = {
    small: 'w-6 h-6',
    header: 'sm:w-7 sm:h-7 md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]',
    large: 'w-14 h-14',
    full: 'w-full h-full',
    captain: 'w-20 h-20',
  };

  return (
    <div
      className={cn(
        'relative inline-block rounded-full',
        isCaptain ? sizeClasses.captain : sizeClasses[finalSize],
        editable && 'editable-gradient-border shadow-sm',
      )}
    >
      <button
        type="button"
        className={cn(
          'relative overflow-hidden rounded-full',
          isCaptain ? sizeClasses.captain : sizeClasses[finalSize],
          !(editable || size === 'header') && 'pointer-events-none',
        )}
        onClick={editable || size === 'header' ? onClick : undefined}
      >
        <div className="relative h-full w-full rounded-full">
          <Image
            src={imageUrl && imageUrl.trim() ? imageUrl : defaultImage}
            alt="프로필 이미지"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full"
            priority={priority}
          />
        </div>
      </button>
      {editable && !isCaptain && (
        <button
          type="button"
          className="absolute -bottom-1 -right-1 z-20 h-8 w-8 cursor-pointer rounded-full md:-right-1 md:bottom-2 lg:-right-1 lg:bottom-2"
        >
          <Image src={editImage} alt="수정 버튼" width={30} height={30} />
        </button>
      )}
      {isCaptain && (
        <div className="absolute bottom-0 right-0 z-20">
          <Image src={captainCheck} alt="캡틴 배지" width={24} height={24} />
        </div>
      )}
    </div>
  );
}
