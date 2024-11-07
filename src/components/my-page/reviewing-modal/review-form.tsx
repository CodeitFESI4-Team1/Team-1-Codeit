import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import Textarea from '@/src/components/common/input/textarea';
import ButtonHearts from './button-hearts';

type FormValues = {
  reviewText: string;
  score: number;
};

interface ReviewProps {
  onCancel: () => void;
}

export default function ReviewForm({ onCancel }: ReviewProps) {
  const { register, handleSubmit } = useForm<FormValues>();
  const [textReview, setTextReview] = useState<string>('');
  const [point, setPoint] = useState<number>(0);

  // TODO : 주석 부분(api 연결) 수정
  // TODO : form에 넣기: onSubmit={handleSubmit(clickSubmit)}

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextReview(e.target.value);
  };

  const handleScoreChange = (newScore: number) => {
    setPoint(newScore);
  };

  return (
    <form className="flex h-[308px] w-[472px] flex-col justify-between gap-[24px]">
      <ButtonHearts onChange={handleScoreChange} />
      <Textarea
        placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
        inputClassNames="w-[471px] h-[120px] bg-gray-50 text-gray-400"
        value={textReview}
        onChange={handleTextChange}
        register={register('reviewText')}
        label="경험에 대해 남겨주세요"
        styles={{
          input: {
            '::placeholder': {
              color: 'gray - 400',
              fontWeight: 500,
              fontSize: '1rem',
            },
          },
          label: {
            fontWeight: 600,
            fontSize: '1rem',
          },
        }}
      />
      <input type="hidden" value={point} {...register('score')} />
      <div className="font-base flex justify-between gap-[16px] font-semibold">
        <Button
          onClick={onCancel}
          className="h-[44px] w-[228px] border border-blue-500 text-blue-500"
        >
          취소
        </Button>
        <Button type="submit" className="h-[44px] w-[228px] border-none bg-blue-500 text-white">
          리뷰 등록
        </Button>
      </div>
    </form>
  );
}
