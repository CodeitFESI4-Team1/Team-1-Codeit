'use client';

import { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useRouter } from 'next/navigation';
import { NumberInput } from '@mantine/core';
import { getImageUrl } from '@/src/_apis/image/get-image-url';
import categoryData from '@/src/data/category.json';
import regionData from '@/src/data/region.json';
import Button from '@/src/components/common/input/button';
import DropDown from '@/src/components/common/input/drop-down';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
import TextInput from '@/src/components/common/input/text-input';
import Textarea from '@/src/components/common/input/textarea';
import { CreateCrewFormTypes, EditCrewResponseTypes } from '@/src/types/create-crew';
import ImgCrewSampleUrls from '@/public/assets/images/crew-sample';

export interface CreateCrewFormProps {
  type: 'create' | 'edit';
  data: CreateCrewFormTypes | EditCrewResponseTypes;
  isEdit?: boolean;
  onEdit?: (data: CreateCrewFormTypes) => void;
  onSubmit?: (data: CreateCrewFormTypes) => void;
}

export default function CreateCrewForm({
  type,
  isEdit,
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
    watch,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<CreateCrewFormTypes>({
    defaultValues: data,
    mode: 'onBlur',
  });

  useFormPersist(type === 'create' ? 'createCrew' : 'editCrew', {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  });

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);

  const title = useWatch({ control, name: 'title' });
  const mainCategory = useWatch({ control, name: 'mainCategory' });
  const mainLocation = useWatch({ control, name: 'mainLocation' });
  const subLocation = useWatch({ control, name: 'subLocation' });
  const introduce = useWatch({ control, name: 'introduce' });

  const setInitialValues = () => {
    setValue('title', '');
    setValue('mainCategory', '');
    setValue('subCategory', '');
    setValue('imageUrl', '');
    setValue('mainLocation', '');
    setValue('subLocation', '');
    setValue('totalCount', 4);
    setValue('introduce', '');
    localStorage.removeItem('createCrew');
  };

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

  const handleFileChange = async (
    file: File | string | null,
    onChange: (value: string | File) => void,
  ) => {
    if (file instanceof File) {
      const imgResponse = await getImageUrl(file, 'CREW');
      onChange(imgResponse?.imageUrl || '');
    }
  };

  const handleClear = () => {
    setInitialValues();
    router.back();
  };

  useEffect(() => {
    setCategoryIndex(categoryData.findIndex((category) => category.title.label === mainCategory));
    setRegionIndex(regionData.findIndex((region) => region.main.label === mainLocation));

    if (isEdit && subLocation === '') {
      setValue('subLocation', '전체');
    }
    if (!isEdit && isSubmitSuccessful) {
      setInitialValues();
    }
  }, [mainCategory, mainLocation, isSubmitSuccessful]);

  return (
    <form onSubmit={type === 'edit' ? handleSubmit(onEdit) : handleSubmit(onSubmit)}>
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
            htmlFor="crew-mainCategory"
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
                  id="crew-mainCategory"
                  variant="default"
                  inWhere="form"
                  placeholder={isEdit && field.value ? field.value : '메인 카테고리'}
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
            <label htmlFor="crew-subCategory" className="sr-only">
              세부 카테고리를 선택해주세요.
            </label>
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <DropDown
                  {...field}
                  id="crew-subCategory"
                  variant="default"
                  inWhere="form"
                  placeholder={isEdit && field.value ? field.value : '세부 카테고리'}
                  data={categoryData[categoryIndex]?.items || []}
                  className="flex-1"
                  error={errors.subCategory?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-base font-semibold text-gray-800 md:text-xl">
            대표이미지를 선택하거나 첨부해주세요.
          </span>
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
                  handleFileChange(newValue, field.onChange);
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
            htmlFor="crew-mainLocation"
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
                  id="crew-mainLocation"
                  variant="default"
                  inWhere="form"
                  placeholder={isEdit && field.value ? field.value : '특별시/도'}
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
            <label htmlFor="crew-subLocation" className="sr-only">
              세부 지역을 선택해주세요.
            </label>
            <Controller
              name="subLocation"
              control={control}
              rules={{ required: '시/군/구를 선택해주세요.' }}
              render={({ field }) => (
                <DropDown
                  {...field}
                  id="crew-subLocation"
                  variant="default"
                  inWhere="form"
                  placeholder={isEdit && field.value ? field.value : '시/군/구'}
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
            크루 최대 인원을 선택해주세요.
          </label>
          <Controller
            name="totalCount"
            control={control}
            rules={{
              required: '크루 최대 인원을 입력해주세요.',
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
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label
              htmlFor="crew-introduce"
              className="text-base font-semibold text-gray-800 md:text-xl"
            >
              크루 소개
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
                id="crew-introduce"
                placeholder="크루 소개글을 100자 이내로 입력해주세요."
                maxLength={100}
                inputClassNames="h-40 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl"
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
            {type === 'create' ? '만들기' : '수정'}
          </Button>
          <Button
            type="button"
            onClick={handleClear}
            className="btn-outlined h-11 w-29.5 flex-1 text-base font-medium text-blue-500"
          >
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}
