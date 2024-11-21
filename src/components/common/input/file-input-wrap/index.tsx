'use client';

import { useState } from 'react';
import { FieldError } from 'react-hook-form';
import FileInput from './file-input';
import FileSample from './file-sample';

export interface FileInputProps {
  isEdit?: boolean;
  value: File | string | null;
  sample: string[];
  error: FieldError | undefined;
  onChange: (newValue: File | string | null) => void;
}

export default function FileInputWrap({ isEdit, value, sample, error, onChange }: FileInputProps) {
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
      <FileSample
        isEdit={isEdit}
        value={isEdit ? (value as string) : sample[0]}
        image={sample[0]}
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        isEdit={isEdit}
        value={isEdit ? (value as string) : sample[0]}
        image={sample[1]}
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        isEdit={isEdit}
        value={isEdit ? (value as string) : sample[0]}
        image={sample[2]}
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileInput
        value={fileValue}
        onChange={handleFileInput}
        isBlur={isSampleSelected}
        error={error}
      />
    </div>
  );
}
