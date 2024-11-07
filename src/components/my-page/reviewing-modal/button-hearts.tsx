import { useState } from 'react';
import Image from 'next/image';
import activeHeart from '@/public/assets/icons/active-heart.svg';
import defaultHeart from '@/public/assets/icons/default-heart.svg';

interface ButtonHeartsProps {
  onChange: (score: number) => void;
}

export default function ButtonHearts({ onChange }: ButtonHeartsProps) {
  const [clickedArray, setClickedArray] = useState<boolean[]>(Array(5).fill(false));

  const handleClick = (index: number) => {
    setClickedArray((prev) => prev.map((_, i) => i <= index));
    onChange(index + 1);
  };

  return (
    <div className="flex w-full flex-col items-start justify-between gap-[12px]">
      <p className="font-base font-semibold">만족스러운 경험이었나요?</p>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <button type="button" onClick={() => handleClick(index)} key={`btn ${index + 1}`}>
            <Image
              src={clickedArray[index] ? activeHeart : defaultHeart}
              width={24}
              height={24}
              alt="heartbtn"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
