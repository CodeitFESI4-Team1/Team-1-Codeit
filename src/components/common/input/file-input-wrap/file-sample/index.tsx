import { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface FileSampleProps {
  isEdit?: boolean;
  value?: string;
  image: string;
  isBlur: boolean;
  onChange: (inputValue: string) => void;
}

export default function FileSample({ isEdit, value, image, isBlur, onChange }: FileSampleProps) {
  const radioInput = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    onChange(image);
  };

  useEffect(() => {
    if (isBlur && radioInput.current) {
      radioInput.current.checked = false;
    }
    if (!isBlur && isEdit && value === image && radioInput.current) {
      radioInput.current.checked = true;
    }
  }, [isBlur, value, isEdit]);

  return (
    <label className="min-w-1/4 relative aspect-square w-1/4 overflow-hidden rounded-xl">
      <input
        type="radio"
        onChange={handleClick}
        ref={radioInput}
        name="radio-image"
        className="absolute inset-0 hidden"
      />
      <Image
        src={image}
        width={282}
        height={282}
        alt="샘플 이미지 1"
        className="h-full w-full object-cover"
      />
      {radioInput.current && radioInput.current.checked && isBlur === false && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <p className="text-white">선택</p>
        </div>
      )}
    </label>
  );
}
