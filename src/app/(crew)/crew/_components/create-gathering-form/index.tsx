'use client';

import { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { NumberInput } from '@mantine/core';
import Button from '@/src/components/common/input/button';
import DateTimePicker from '@/src/components/common/input/date-time-picker';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
import TextInput from '@/src/components/common/input/text-input';
import Textarea from '@/src/components/common/input/textarea';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';
import ImgGatheringSamples from '@/public/assets/images/gathering-sample';

export interface CreateGatheringFormTypes {
  data: CreateGatheringRequestType;
  isEdit?: boolean;
  onEdit?: (data: CreateGatheringRequestType) => void;
  onSubmit?: (data: CreateGatheringRequestType) => void;
  onClose: () => void;
}

export default function CreateGatheringForm({
  isEdit = false,
  onEdit = () => {},
  onSubmit = () => {},
  onClose,
  data,
}: CreateGatheringFormTypes) {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<CreateGatheringRequestType>({
    defaultValues: data,
    mode: 'onBlur',
  });
  const title = useWatch({ control, name: 'title' });
  const location = useWatch({ control, name: 'location' });
  const introduce = useWatch({ control, name: 'introduce' });

  return (
    <form onSubmit={isEdit ? handleSubmit(onEdit) : handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-title" className="text-base font-semibold text-gray-800">
              약속 이름
            </label>
            <span>
              <span className="text-blue-500">{title.length}</span>/20
            </span>
          </div>
          <Controller
            name="title"
            control={control}
            rules={{
              required: '필수 입력사항입니다.',
              validate: (value) => {
                if (value && value.trim().length > 0) {
                  return true; // 입력이 있을 경우 에러 해제
                }
                return '필수 입력사항입니다.'; // 입력이 비어있을 경우 에러 메시지 표시
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                id="gathering-title"
                variant="filled"
                onChange={(e) => {
                  field.onChange(e);
                  if (errors.title) trigger('title'); // 입력 중일 때 유효성 검사 트리거
                }}
                error={errors.title?.message}
                placeholder="약속명을 20자 이내로 입력해주세요."
                maxLength={20}
                classNames={{
                  input:
                    'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl aria-[invalid=true]:border-none',
                }}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="gathering-image" className="text-base font-semibold text-gray-800">
            이미지 선택/첨부
          </label>
          <div className="flex">
            <Controller
              name="imageUrl"
              control={control}
              rules={{ required: '이미지를 선택해주세요.' }}
              render={({ field }) => (
                <FileInputWrap
                  {...field}
                  sample={ImgGatheringSamples}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger('imageUrl'); // 유효성 검사 실행
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-location" className="text-base font-semibold text-gray-800">
              장소
            </label>
            <span>
              <span className="text-blue-500">{location.length}</span>/20
            </span>
          </div>
          <Controller
            name="location"
            control={control}
            rules={{
              required: '필수 입력사항입니다.',
              validate: (value) => {
                if (value && value.trim().length > 0) {
                  return true; // 입력이 있을 경우 에러 해제
                }
                return '필수 입력사항입니다.'; // 입력이 비어있을 경우 에러 메시지 표시
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                id="gathering-location"
                variant="filled"
                onChange={(e) => {
                  field.onChange(e);
                  if (errors.location) trigger('title'); // 입력 중일 때 유효성 검사 트리거
                }}
                error={errors.location?.message}
                placeholder="약속명을 20자 이내로 입력해주세요."
                maxLength={20}
                classNames={{
                  input:
                    'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl aria-[invalid=true]:border-none',
                }}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-dateTime" className="text-base font-semibold text-gray-800">
              날짜
            </label>
          </div>
          <Controller
            name="dateTime"
            control={control}
            rules={{ required: '날짜와 시간을 선택해주세요.' }}
            render={({ field: { onChange, ...field } }) => (
              <DateTimePicker
                {...field}
                fullDate={new Date()}
                onChange={(date) => {
                  const formattedDate = date.toLocaleString();
                  onChange(formattedDate);
                  trigger('imageUrl'); // 유효성 검사 실행
                }}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="gathering-totalCount" className="text-base font-semibold text-gray-800">
            모집 정원
          </label>
          <Controller
            name="totalCount"
            control={control}
            rules={{
              required: '모집 정원을 입력해주세요.',
            }}
            render={({ field }) => (
              <NumberInput
                {...field}
                id="gathering-totalCount"
                variant="filled"
                min={4}
                max={20}
                classNames={{
                  input:
                    'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl',
                }}
                placeholder="자세한 모집 정원을 입력해주세요."
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-introduce" className="text-base font-semibold text-gray-800">
              모집 설명/공지
            </label>
            <span>
              <span className="text-blue-500">{introduce.length}</span>/100
            </span>
          </div>
          <Controller
            name="introduce"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="모집 설명/공지를 100자 이내로 입력해주세요."
                maxLength={100}
                inputClassNames="h-40 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl"
              />
            )}
          />
        </div>
        <div className="flex justify-between gap-4 pt-10">
          <Button
            type="submit"
            disabled={!isValid}
            className="btn-filled h-11 flex-1 text-base font-medium disabled:bg-gray-200"
          >
            {isEdit ? '수정' : '확인'}
          </Button>
          <Button
            type="button"
            onClick={onClose}
            className="btn-outlined h-11 w-29.5 flex-1 text-base font-medium text-blue-500"
          >
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}
