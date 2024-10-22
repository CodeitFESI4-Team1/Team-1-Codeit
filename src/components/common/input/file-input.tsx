import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import icoPlus from '@/public/assets/icon/ic-plus.svg';
import icoX from '@/public/assets/icon/ic-x.svg';

interface FileInputProps {
  value: File | null;
  onChange: (value: File | null) => void;
  isBlur: boolean;
}

export default function FileInput({ value, isBlur, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleClearClick = () => {
    setPreview(null);
    onChange(null);
  };

  useEffect(() => {
    if (!value) return;
    if (isBlur) {
      setPreview(null);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview as string);
      }
    };
  }, [value, isBlur]);

  return (
    <div className="relative flex gap-2">
      <label
        htmlFor="item-file"
        className="flex h-[282px] w-[282px] flex-col items-center justify-center rounded-xl bg-neutral-100"
      >
        <Image width="48" height="48" src={icoPlus} alt="아이콘" aria-hidden="true" />
        <span>이미지 등록</span>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInput}
        onChange={handleChange}
        id="item-file"
        className="hidden"
      />

      {preview && (
        <div className="absolute inset-0 h-[282px] w-[282px] overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={preview}
            width={282}
            height={282}
            alt="이미지 미리보기"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={handleClearClick}
            className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-blue-500 p-1.5"
          >
            <Image width="8" height="8" src={icoX} alt="아이콘" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
