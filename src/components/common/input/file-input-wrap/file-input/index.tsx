import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';
import Image from 'next/image';
import IcoPlus from '@/public/assets/icons/ic-plus.svg';
import IcoX from '@/public/assets/icons/ic-x.svg';
import ImgCrewSampleUrls from '@/public/assets/images/crew-sample';
import ImgGatheringSampleUrls from '@/public/assets/images/gathering-sample';

export interface FileInputProps {
  value: File | string | null;
  onChange: (value: File | null) => void;
  error: FieldError | undefined;
  isBlur: boolean;
}

const isSample = (value: File | string | null) => {
  if (typeof value === 'string') {
    return !!(ImgCrewSampleUrls.includes(value) || ImgGatheringSampleUrls.includes(value));
  }
  return false;
};
export default function FileInput({ value, isBlur, error, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(isSample(value) ? null : (value as string));
  const [fileReader, setFileReader] = useState<FileReader | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileLoad = (file: File) => {
    // 이전 FileReader가 있을 경우 중단
    if (fileReader) {
      fileReader.abort();
    }

    const reader = new FileReader();
    setFileReader(reader);

    reader.onloadend = () => {
      if (reader.result) {
        setPreview(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // // 명시적인 파일 형식 검증 추가
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        // 허용되지 않은 파일 형식 처리
        e.target.value = ''; // 입력 필드 초기화
        toast.error('JPG, PNG 파일만 업로드 가능합니다.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        e.target.value = ''; // 입력 필드 초기화
        toast.error('파일 크기는 5MB 이하여야 합니다.');
        return;
      }
      onChange(file);
      handleFileLoad(file);
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
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [fileReader, preview]);

  useEffect(() => {
    if (error) {
      setPreview(null);
    }
  }, [error]);

  useEffect(() => {
    if (!isBlur && value) {
      if (typeof value === 'string') {
        setPreview(value);
      } else {
        handleFileLoad(value);
        onChange(value);
      }
    }
    if (isBlur && value) {
      setPreview(null); // 블러 상태에서 미리보기 제거
    }
  }, [isBlur, value]);

  return (
    <div className="min-w-1/4 relative flex aspect-square w-1/4 gap-2">
      <label
        htmlFor="item-file"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-neutral-100"
      >
        <figure className="relative flex h-3.5 w-3.5 md:h-5 md:w-5">
          <Image
            fill
            sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={IcoPlus}
            alt="이미지 추가"
            className="h-full w-full object-cover"
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
          <Image
            src={preview}
            fill
            sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="이미지 미리보기"
            className="h-full w-full object-cover"
          />
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
