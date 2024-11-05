'use client';

import { useState } from 'react';
import FileInput from './file-input';
import FileSample from './file-sample';

export interface FileInputProps {
  value: File | null;
  onChange: (newValue: File | null) => void;
}

export default function FileInputWrap({ value, onChange }: FileInputProps) {
  const [fileValue, setFileValue] = useState<File | null>(value);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isSampleSelected, setIsSampleSelected] = useState(false);

  const handleChange = (inputValue: File | null) => {
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
        imgUrl="https://images.stockcake.com/public/a/7/6/a768d87b-1f99-4b50-9286-f1583af33522_large/team-huddle-celebration-stockcake.jpg"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        imgUrl="https://images.stockcake.com/public/a/a/0/aa0e5e46-987b-43ab-9e14-0012148d4d47_large/joyful-sports-gathering-stockcake.jpg"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileSample
        imgUrl="https://images.stockcake.com/public/2/4/0/240c891a-9e35-4490-8714-a1c135b0c645_large/team-celebration-time-stockcake.jpg"
        onChange={handleChange}
        isBlur={isOtherSelected}
      />
      <FileInput value={fileValue} onChange={handleFileInput} isBlur={isSampleSelected} />
    </div>
  );
}
