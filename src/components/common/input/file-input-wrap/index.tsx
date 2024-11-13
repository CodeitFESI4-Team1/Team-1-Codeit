'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';
import FileInput from './file-input';
import FileSample from './file-sample';

export interface FileInputProps {
  value: File | string | null;
  sample: StaticImageData[];
  onChange: (newValue: File | string | null) => void;
}

export default function FileInputWrap({ value, sample, onChange }: FileInputProps) {
  const [fileValue, setFileValue] = useState<File | StaticImageData | string | null>(value);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isSampleSelected, setIsSampleSelected] = useState(false);

  const handleChange = (inputValue: string) => {
    setIsOtherSelected(false);
    setIsSampleSelected(true);
    setFileValue(inputValue);
    onChange(inputValue);
  };

  const handleFileInput = (inputValue: File | null) => {
    setIsOtherSelected(true);
    setIsSampleSelected(false);
    setFileValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className="container flex max-w-[1200px] gap-4">
      <FileSample
        image="https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/0e05d971-15a8-4a32-bf03-80d12cae392e"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        image="https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/eb35c35d-829a-402b-8019-29e42f91589f"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        image="https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/471b3b3b-b23c-48e8-8e6b-9a7ec31e1917"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileInput value={fileValue} onChange={handleFileInput} isBlur={isSampleSelected} />
    </div>
  );
}
