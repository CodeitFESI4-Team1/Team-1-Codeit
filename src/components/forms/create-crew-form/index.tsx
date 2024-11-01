'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, NumberInput, TextInput } from '@mantine/core';
import categoryData from '@/src/data/category.json';
import regionData from '@/src/data/region.json';
import DropDown from '@/src/components/common/input/drop-down';
import FileInputWrap from '@/src/components/common/input/file-input-wrap';
import { CreateCrewRequestTypes } from '@/src/types/create-crew';

export interface CreateCrewFormTypes {
  data: CreateCrewRequestTypes;
  isEdit?: boolean;
}

export default function CreateCrewForm({ data, isEdit = false }: CreateCrewFormTypes) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onBlur', // blur 시점에 유효성 검사 실행
    reValidateMode: 'onBlur', // 값이 변경된 후에도 blur 시 유효성 검사 재실행
  });
  const [values, setValues] = useState<CreateCrewRequestTypes>(data);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);
  const requiredFields: (keyof CreateCrewRequestTypes)[] = [
    'title',
    'imageUrl',
    'mainCategory',
    'subCategory',
    'mainLocation',
    'subLocation',
    'totalCount',
  ];
  const isFormValid =
    requiredFields.every((field) => values[field as keyof CreateCrewRequestTypes]) &&
    Object.keys(errors).length === 0;

  const handleSubmitForm = () => {
    // TODO : API 연결
  };

  const handleEdit = () => {
    // TODO : API 연결
  };

  const handleMainCategoryChange = (newValue: string | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      mainCategory: newValue,
      subCategory: null,
    }));
  };

  const handleMainLocationChange = (newValue: string | null) => {
    setValues((prevValues) => ({
      ...prevValues,
      mainLocation: newValue,
      subLocation: null,
    }));
  };

  useEffect(() => {
    setCategoryIndex(
      categoryData.findIndex((category) => category.title.value === values.mainCategory),
    );
    setRegionIndex(regionData.findIndex((region) => region.main.value === values.mainLocation));
  }, [values]);

  return (
    <form onSubmit={isEdit ? handleEdit : handleSubmit(handleSubmitForm)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="crew-title" className="text-xl font-semibold text-gray-800">
              크루명을 입력해주세요.
            </label>
            <span>
              <span className="text-blue-500">{values.title.length}</span>/20
            </span>
          </div>
          <TextInput
            id="crew-title"
            variant="filled"
            value={values.title}
            {...register('title', {
              required: '필수 입력사항입니다.',
              pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9| ]{1,20}$/,
            })}
            error={errors.title?.message?.toString()}
            onChange={(e) => setValues((prevValues) => ({ ...prevValues, title: e.target.value }))}
            placeholder="크루명을 20자 이내로 입력해주세요."
            maxLength={20}
            classNames={{
              input:
                'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 font-pretendard text-base font-medium rounded-xl aria-[invalid=true]:border-none',
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="crew-category" className="text-xl font-semibold text-gray-800">
            카테고리를 선택해주세요.
          </label>
          <div className="flex justify-between gap-4">
            <DropDown
              variant="default"
              inWhere="form"
              placeholder="메인 카테고리"
              name="mainCategory"
              value={values.mainCategory}
              onChange={(newValue) => handleMainCategoryChange(newValue)}
              data={categoryData.map((category) => category.title)}
              className="flex-1"
            />
            <DropDown
              variant="default"
              inWhere="form"
              placeholder="세부 카테고리"
              name="subCategory"
              value={values.subCategory}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, subCategory: newValue }))
              }
              data={categoryData[categoryIndex]?.items}
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="crew-image" className="text-xl font-semibold text-gray-800">
            대표이미지를 선택하거나 첨부해주세요.
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
          <label htmlFor="crew-category" className="text-xl font-semibold text-gray-800">
            지역을 선택해주세요.
          </label>
          <div className="flex justify-between gap-4">
            <DropDown
              variant="default"
              inWhere="form"
              placeholder="특별시/도"
              name="mainLocation"
              value={values.mainLocation}
              onChange={(newValue) => handleMainLocationChange(newValue)}
              data={regionData.map((region) => region.main)}
              className="flex-1"
            />
            <DropDown
              variant="default"
              inWhere="form"
              placeholder="시/군/구"
              name="subLocation"
              value={values.subLocation}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, subLocation: newValue }))
              }
              data={regionData[regionIndex]?.areas}
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="crew-totalCount" className="text-xl font-semibold text-gray-800">
            모집 정원을 선택해주세요.
          </label>
          <NumberInput
            id="crew-totalCount"
            variant="filled"
            value={values.totalCount}
            {...register('totalCount', {
              min: 4,
              max: 20,
            })}
            name="totalCount"
            onChange={(newValue) =>
              setValues((prevValues) => ({ ...prevValues, totalCount: Number(newValue) }))
            }
            placeholder="자세한 모집 정원을 입력해주세요."
            min={0}
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
        <div className="flex justify-between gap-4 pt-18">
          <Button
            type="submit"
            h={44}
            disabled={!isFormValid}
            className="flex-1 rounded-xl bg-blue-500 text-base font-medium disabled:bg-gray-200"
          >
            {isEdit ? '수정' : '확인'}
          </Button>
          <Button
            variant="outline"
            onClick={() => router.back()}
            w={118}
            h={44}
            className="flex-1 rounded-xl border-blue-500 text-base font-medium text-blue-500"
          >
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}
