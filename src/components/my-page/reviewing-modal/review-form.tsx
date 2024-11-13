import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { PostReviewParams, postReview } from '@/src/_apis/review/review-apis';
import { ApiError } from '@/src/utils/api';
import Textarea from '@/src/components/common/input/textarea';
import ButtonHearts from './button-hearts';

type FormValues = {
  reviewText: string;
  score: number;
};

interface ReviewFormProps {
  gatheringId: number;
  onCancel: () => void;
}

export default function ReviewForm({ gatheringId, onCancel }: ReviewFormProps) {
  const { register, handleSubmit } = useForm<FormValues>();
  const [textReview, setTextReview] = useState<string>('');
  const [point, setPoint] = useState<number>(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 300) {
      setTextReview(e.target.value);
    }
  };

  const handleScoreChange = (newScore: number) => {
    setPoint(newScore);
  };

  const mutation = useMutation<ResponseType, ApiError, PostReviewParams>({
    mutationFn: (params: PostReviewParams) =>
      postReview(params.gatheringId, params.point, params.reviewText),

    onSuccess: (data: ResponseType) => {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    onError: (error: ApiError) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  const clickSubmit = (data: FormValues) => {
    mutation.mutate({ gatheringId, point: data.score, reviewText: data.reviewText });
  };

  return (
    <form
      onSubmit={handleSubmit(clickSubmit)}
      className="flex h-auto w-[288px] flex-col justify-between gap-[20px] md:h-[302px] md:w-[472px]"
    >
      <ButtonHearts onChange={handleScoreChange} />
      <Textarea
        placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
        inputClassNames="md:w-[472px] md:h-[120px] bg-gray-50 text-gray-900 w-[288px] h-[240px] rounded-[12px]"
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
      <div className="font-base flex w-full justify-between gap-[8px] font-semibold md:gap-[16px]">
        <Button
          onClick={onCancel}
          className="h-[44px] w-full rounded-[12px] border border-blue-500 bg-white text-blue-500"
        >
          취소
        </Button>
        <Button
          type="submit"
          className="h-[44px] w-full rounded-[12px] border-none bg-blue-500 text-white"
        >
          리뷰 등록
        </Button>
      </div>
    </form>
  );
}
