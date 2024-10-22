import { useEffect, useRef } from 'react';
import Image from 'next/image';

export interface FileSampleProps {
  imgUrl: string;
  isBlur: boolean;
  onChange: (inputValue: File | null) => void;
}

export default function FileSample({ imgUrl, isBlur, onChange }: FileSampleProps) {
  const radioInput = useRef<HTMLInputElement>(null);

  const convertUrlToFile = async (
    url: string | undefined,
    fileName: string,
    mimeType: string,
  ): Promise<File> => {
    const res = await fetch(url?.toString() ?? '');
    const blob = await res.blob();
    return new File([blob], fileName, { type: mimeType });
  };

  const handleClick = async () => {
    const file = await convertUrlToFile(imgUrl, 'crew-01.webp', 'image/webp');
    onChange(file);
  };

  useEffect(() => {
    if (isBlur && radioInput.current) {
      radioInput.current.checked = false;
    }
  }, [isBlur]);

  return (
    <label className="relative h-[282px] w-[282px] overflow-hidden rounded-xl">
      <input
        type="radio"
        onChange={handleClick}
        ref={radioInput}
        name="radio-image"
        className="absolute inset-0 hidden"
      />
      <Image
        src={imgUrl}
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
