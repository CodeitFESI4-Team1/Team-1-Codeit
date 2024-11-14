'use client';

import { useState } from 'react';
import FileInput from './file-input';
import FileSample from './file-sample';

export interface FileInputProps {
  value: File | string | null;
  sample: string[];
  onChange: (newValue: File | string | null) => void;
}

export default function FileInputWrap({ value, sample, onChange }: FileInputProps) {
  const [fileValue, setFileValue] = useState<File | string | null>(value);
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
      <FileSample image={sample[0]} onChange={handleChange} isBlur={isOtherSelected} />
      <FileSample image={sample[1]} onChange={handleChange} isBlur={isOtherSelected} />
      <FileSample image={sample[2]} onChange={handleChange} isBlur={isOtherSelected} />
      <FileInput value={fileValue} onChange={handleFileInput} isBlur={isSampleSelected} />
    </div>
  );
}
