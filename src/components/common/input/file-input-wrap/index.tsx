'use client';

import { useState } from 'react';
import FileInput from '../file-input';
import FileSample from '../file-sample';

export interface FileInputProps {
  value: FileValueType;
}

export interface FileValueType {
  image: File | null;
}

export default function FileInputWrap({ value }: FileInputProps) {
  const [fileValue, setFileValue] = useState<FileValueType>(value);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isSampleSelected, setIsSampleSelected] = useState(false);

  const handleChange = (inputValue: File | null) => {
    setFileValue({ image: inputValue });
    setIsOtherSelected(false);
    setIsSampleSelected(true);
  };

  const handleFileInput = (inputValue: File | null) => {
    setFileValue({ image: inputValue });
    setIsOtherSelected(true);
    setIsSampleSelected(false);
  };

  return (
    <div className="container flex max-w-[1200px] gap-2">
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
      <FileInput value={fileValue.image} onChange={handleFileInput} isBlur={isSampleSelected} />
    </div>
  );
}
