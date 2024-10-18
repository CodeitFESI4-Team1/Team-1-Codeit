'use client';

import Image from 'next/image';

import defaultImage from '@/public/assets/icons/default-profile.svg';
import editImage from '@/public/assets/icons/profile-edit.svg';

/**
 * Profile 컴포넌트
 *
 * @param {Object} props - Profile 컴포넌트의 props
 * @param {'small' | 'medium' | 'large'} [props.size='large'] - 프로필의 크기를 결정 기본값은 'large'
 * @param {string} [props.imageUrl] - 이미지 URL을 설정 없으면 기본 이미지
 * @param {boolean} [props.editable=false] - 프로필 편집시 사용
 * @param {() => void} [props.onClick] - 프로필을 클릭
 * @param {() => void} [props.onEdit] - 편집 버튼을 클릭시
 */

interface ProfileProps {
  size?: 'small' | 'medium' | 'large';
  imageUrl?: string;
  editable?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
}

export function Profile({
  size = 'large',
  imageUrl,
  editable = false,
  onClick,
  onEdit,
}: ProfileProps) {
  const finalSize = editable ? 'large' : size;

  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-[40px] h-[40px]',
    large: 'w-14 h-14',
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={`relative ${sizeClasses[finalSize]} overflow-hidden rounded-full`}
        onClick={onClick}
      >
        <div
          className={`relative h-full w-full rounded-full ${imageUrl ? 'border-4 border-gray-200' : ''}`}
        >
          <Image
            src={imageUrl || defaultImage}
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
          className="absolute -right-1 bottom-2 z-20 h-5 w-5 rounded-full"
          onClick={(e) => {
            // 추후 수정예정
            e.stopPropagation();
            if (onEdit) onEdit();
          }}
        >
          <Image src={editImage} alt="수정 버튼" width={24} height={24} />
        </button>
      )}
    </div>
  );
}
