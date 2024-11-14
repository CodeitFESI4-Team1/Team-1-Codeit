'use client';

import { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { NumberInput } from '@mantine/core';
import categoryData from '@/src/data/category.json';
import regionData from '@/src/data/region.json';
import Button from '@/src/components/common/input/button';
import DropDown from '@/src/components/common/input/drop-down';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
import TextInput from '@/src/components/common/input/text-input';
import { CreateCrewFormTypes } from '@/src/types/create-crew';
import ImgCrewSampleUrls from '@/public/assets/images/crew-sample';

export interface CreateCrewFormProps {
  data: CreateCrewFormTypes;
  isEdit?: boolean;
  onEdit?: (data: CreateCrewFormTypes) => void;
  onSubmit?: (data: CreateCrewFormTypes) => void;
}

export default function CreateCrewForm({
  isEdit = false,
  onEdit = () => {},
  onSubmit = () => {},
  data,
}: CreateCrewFormProps) {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateCrewFormTypes>({
    defaultValues: data,
    mode: 'onBlur',
  });

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);

  const title = useWatch({ control, name: 'title' });
  // mainCategory와 mainLocation 값의 변화를 감지하여 인덱스를 설정
  const mainCategory = useWatch({ control, name: 'mainCategory' });
  const mainLocation = useWatch({ control, name: 'mainLocation' });

  const handleMainCategoryChange = (newValue: string | null) => {
    setValue('mainCategory', newValue || '');
    setValue('subCategory', null);
    clearErrors('subCategory');
  };

  const handleMainLocationChange = (newValue: string | null) => {
    setValue('mainLocation', newValue || '');
    setValue('subLocation', null);
    clearErrors('subLocation');
  };
  useEffect(() => {
    setCategoryIndex(categoryData.findIndex((category) => category.title.label === mainCategory));
    setRegionIndex(regionData.findIndex((region) => region.main.label === mainLocation));
  }, [mainCategory, mainLocation]);

  return (
    <form onSubmit={isEdit ? handleSubmit(onEdit) : handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label
              htmlFor="crew-title"
              className="text-base font-semibold text-gray-800 md:text-xl"
            >
              크루명을 입력해주세요.
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
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                id="crew-title"
                variant="filled"
                onChange={(e) => {
                  field.onChange(e);
                  if (errors.title) trigger('title'); // 입력 중일 때 유효성 검사 트리거
                }}
                error={errors.title?.message}
                placeholder="크루명을 20자 이내로 입력해주세요."
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
          <label
            htmlFor="crew-category"
            className="text-base font-semibold text-gray-800 md:text-xl"
          >
            카테고리를 선택해주세요.
          </label>
          <div className="flex justify-between gap-4">
            <Controller
              name="mainCategory"
              control={control}
              rules={{ required: '메인 카테고리를 선택해주세요.' }}
              render={({ field }) => (
                <DropDown
                  {...field}
                  variant="default"
                  inWhere="form"
                  placeholder="메인 카테고리"
                  data={categoryData.map((category) => category.title)}
                  className="flex-1"
                  onChange={(value) => {
                    field.onChange(value);
                    handleMainCategoryChange(value);
                  }}
                  error={errors.mainCategory?.message}
                />
              )}
            />
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <DropDown
                  {...field}
                  variant="default"
                  inWhere="form"
                  placeholder="세부 카테고리"
                  data={categoryData[categoryIndex]?.items || []}
                  className="flex-1"
                  error={errors.subCategory?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="crew-image" className="text-base font-semibold text-gray-800 md:text-xl">
            대표이미지를 선택하거나 첨부해주세요.
          </label>
          <Controller
            name="imageUrl"
            control={control}
            rules={{
              required: '이미지를 선택해주세요.',
              validate: {
                fileSize: (file) =>
                  file && file instanceof File
                    ? file.size <= 5242880 || '파일 크기는 5MB 이하여야 합니다.'
                    : true, // 문자열인 경우 크기 검사를 건너뜁니다.
                fileType: (file) =>
                  file && file instanceof File
                    ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) ||
                      'JPG, PNG 파일만 업로드 가능합니다.'
                    : true, // 문자열인 경우 파일 타입 검사를 건너뜁니다.
              },
            }}
            render={({ field }) => (
              <FileInputWrap
                {...field}
                isEdit={isEdit}
                sample={ImgCrewSampleUrls}
                onChange={(newValue) => {
                  field.onChange(newValue);
                  trigger('imageUrl');
                }}
              />
            )}
          />
          {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="crew-category"
            className="text-base font-semibold text-gray-800 md:text-xl"
          >
            지역을 선택해주세요.
          </label>
          <div className="flex justify-between gap-4">
            <Controller
              name="mainLocation"
              control={control}
              rules={{ required: '특별시/도를 선택해주세요.' }}
              render={({ field }) => (
                <DropDown
                  {...field}
                  variant="default"
                  inWhere="form"
                  placeholder="특별시/도"
                  data={regionData.map((region) => region.main)}
                  className="flex-1"
                  onChange={(value) => {
                    field.onChange(value);
                    handleMainLocationChange(value);
                  }}
                  error={errors.mainLocation?.message}
                />
              )}
            />
            <Controller
              name="subLocation"
              control={control}
              rules={{ required: '시/군/구를 선택해주세요.' }}
              render={({ field }) => (
                <DropDown
                  {...field}
                  variant="default"
                  inWhere="form"
                  placeholder="시/군/구"
                  data={regionData[regionIndex]?.areas || []}
                  className="flex-1"
                  error={errors.subLocation?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="crew-totalCount"
            className="text-base font-semibold text-gray-800 md:text-xl"
          >
            모집 정원을 선택해주세요.
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
                id="crew-totalCount"
                variant="filled"
                min={4}
                max={20}
                error={errors.totalCount?.message}
                classNames={{
                  input:
                    'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl',
                }}
                placeholder="자세한 모집 정원을 입력해주세요."
              />
            )}
          />
        </div>

        <div className="flex justify-between gap-4 pt-18">
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="btn-filled h-11 flex-1 text-base font-medium disabled:bg-gray-200"
          >
            {isEdit ? '수정' : '확인'}
          </Button>
          <Button
            type="button"
            onClick={() => router.back()}
            className="btn-outlined h-11 w-29.5 flex-1 text-base font-medium text-blue-500"
          >
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}
