import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import IcoPlus from '@/public/assets/icons/ic-plus.svg';
import IcoX from '@/public/assets/icons/ic-x.svg';

export interface FileInputProps {
  value: File | StaticImageData | string | null;
  onChange: (value: File | null) => void;
  isBlur: boolean;
}

export default function FileInput({ value, isBlur, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileReader, setFileReader] = useState<FileReader | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 디바운싱 함수 : 이벤트가 연속해서 발생하는 동안은 함수가 실행되지 않고,
  // 이벤트가 끝난 후 일정 시간 동안 이벤트가 발생하지 않으면 함수가 실행됩니다.
  const debounce = (func: (...args: File[]) => void, delay: number) => {
    return (...args: File[]) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => func(...args), delay);
    };
  };

  const handleFileLoad = (file: File) => {
    // 이전 FileReader가 있을 경우 중단
    if (fileReader) {
      fileReader.abort();
    }

    const reader = new FileReader();
    setFileReader(reader);

    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const debouncedHandleFileLoad = debounce(handleFileLoad, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onChange(file);
      e.target.value = '';

      // 디바운싱된 파일 로드 실행
      debouncedHandleFileLoad(file);
    }
  };

  const handleClearClick = () => {
    setPreview(null);
    onChange(null);
    if (fileInput.current) {
      fileInput.current.value = ''; // 파일 입력 필드 초기화
    }
  };

  // 클린업을 위한 useEffect
  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 클린업
      if (fileReader) {
        fileReader.abort(); // 진행 중이던 파일 읽기 중단
      }
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current); // 디바운스 타이머 클리어
      }
    };
  }, [fileReader]);

  useEffect(() => {
    if (isBlur && value) {
      setPreview(null); // 블러 상태에서 미리보기 제거
    }
  }, [isBlur]);

  return (
    <div className="min-w-1/4 relative flex aspect-square w-1/4 gap-2">
      <label
        htmlFor="item-file"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-neutral-100"
      >
        <figure className="relative flex h-3.5 w-3.5 md:h-5 md:w-5">
          <Image
            fill
            src={IcoPlus}
            alt="이미지 추가"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </figure>
        <span className="text-xs font-medium text-gray-400 md:text-base lg:text-lg">
          이미지 등록
        </span>
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
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-neutral-100">
          <Image src={preview} fill alt="이미지 미리보기" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={handleClearClick}
            className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-blue-500 p-1.5"
          >
            <Image width="8" height="8" src={IcoX} alt="이미지 삭제" />
          </button>
        </div>
      )}
    </div>
  );
}
