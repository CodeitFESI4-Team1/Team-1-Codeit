'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NumberInput } from '@mantine/core';
import Button from '@/src/components/common/button';
import DateTimePicker from '@/src/components/common/input/date-time-picker';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
import TextInput from '@/src/components/common/input/text-input';
import Textarea from '@/src/components/common/input/textarea';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';

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
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<CreateGatheringRequestType>();
  const [values, setValues] = useState<CreateGatheringRequestType>(data);
  const requiredFields: (keyof CreateGatheringRequestType)[] = [
    'title',
    'imageUrl',
    'location',
    'dateTime',
    'totalCount',
  ];
  const isFormValid =
    requiredFields.every((field) => values[field as keyof CreateGatheringRequestType]) &&
    Object.keys(errors).length === 0;

  return (
    <form onSubmit={isEdit ? handleSubmit(onEdit) : handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-title" className="text-base font-semibold text-gray-800">
              약속 이름
            </label>
            <span>
              <span className="text-blue-500">{values.title.length}</span>/20
            </span>
          </div>
          <TextInput
            id="gathering-title"
            variant="filled"
            value={values.title}
            register={{
              ...register('title', {
                required: '필수 입력사항입니다.',
                pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9| ]{1,20}$/,
                onBlur: () => trigger('title'),
              }),
            }}
            error={errors.title?.message?.toString()}
            onChange={(e) => setValues((prevValues) => ({ ...prevValues, title: e.target.value }))}
            placeholder="약속 이름을 20자 이내로 입력해주세요."
            maxLength={20}
            classNames={{
              input:
                'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl aria-[invalid=true]:border-none',
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="gathering-image" className="text-base font-semibold text-gray-800">
            이미지 선택/첨부
          </label>
          <div className="flex">
            <FileInputWrap
              value={values.imageUrl}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, imageUrl: newValue }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-location" className="text-base font-semibold text-gray-800">
              장소
            </label>
            <span>
              <span className="text-blue-500">{values.location.length}</span>/20
            </span>
          </div>
          <TextInput
            id="gathering-location"
            variant="filled"
            value={values.location}
            register={{
              ...register('location', {
                required: '필수 입력사항입니다.',
                pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9| ]{1,20}$/,
                onBlur: () => trigger('location'),
              }),
            }}
            error={errors.location?.message?.toString()}
            onChange={(e) =>
              setValues((prevValues) => ({ ...prevValues, location: e.target.value }))
            }
            placeholder="자세한 주소를 입력해주세요."
            maxLength={20}
            classNames={{
              input:
                'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl aria-[invalid=true]:border-none',
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-dateTime" className="text-base font-semibold text-gray-800">
              날짜
            </label>
          </div>
          <DateTimePicker
            fullDate={new Date()}
            onChange={(date: Date) =>
              setValues((prevValues) => ({
                ...prevValues,
                dateTime: date.toLocaleString(),
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="gathering-totalCount" className="text-base font-semibold text-gray-800">
            모집 정원
          </label>
          <NumberInput
            id="gathering-totalCount"
            variant="filled"
            value={values.totalCount}
            {...register('totalCount', {
              min: 4,
              max: 20,
              onBlur: () => trigger('totalCount'),
            })}
            name="totalCount"
            onChange={(newValue) =>
              setValues((prevValues) => ({ ...prevValues, totalCount: Number(newValue) }))
            }
            placeholder="자세한 모집 정원을 입력해주세요."
            min={4}
            max={20}
            classNames={{
              input:
                'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl',
            }}
          />
          {errors.totalCount && (
            <p className="m_8f816625 mantine-InputWrapper-error mantine-TextInput-error">
              4명 이상 20명 이하로 입력해주세요.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="gathering-introduce" className="text-base font-semibold text-gray-800">
              모집 설명/공지
            </label>
            <span>
              <span className="text-blue-500">{values.introduce.length}</span>/100
            </span>
          </div>
          <Textarea
            placeholder="모집 설명/공지를 100자 이내로 입력해주세요."
            value={values.introduce}
            onChange={(e) =>
              setValues((prevValues) => ({ ...prevValues, introduce: e.target.value }))
            }
            maxLength={100}
            inputClassNames="h-40 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl"
          />
        </div>
        <div className="flex justify-between gap-4 pt-10">
          <Button
            type="submit"
            disabled={!isFormValid}
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
