'use client';

import { useEffect, useState } from 'react';
import { Input } from '@mantine/core';
import categoryData from '@/src/data/category.json';
import regionData from '@/src/data/region.json';
import DropDown from '@/src/components/common/input/drop-down';
import FileInputWrap, { FileValueType } from '@/src/components/common/input/file-input-wrap';

interface CreateCrewFormTypes {
  name: string;
  category1: string | null;
  category2: string | null;
  image: FileValueType | null;
  region1: string | null;
  region2: string | null;
  capacity: number;
}

export default function CreateCrewForm() {
  const [values, setValues] = useState<CreateCrewFormTypes>({
    name: '',
    category1: '',
    category2: '',
    image: null,
    region1: '',
    region2: '',
    capacity: 0,
  });
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (values.category1 !== '' && values.category2 !== '') {
      setValues((prevValues) => ({ ...prevValues, category2: '' }));
    }
    setCategoryIndex(
      categoryData.findIndex((category) => category.title.value === values.category1),
    );

    if (values.region1 !== '' && values.region2 !== '') {
      setValues((prevValues) => ({ ...prevValues, region2: '' }));
    }
    setRegionIndex(regionData.findIndex((region) => region.main.value === values.region1));
  }, [values]);

  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="crew-name" className="text-xl font-semibold text-gray-800">
              크루명을 입력해주세요.
            </label>
            <span>
              <span className="text-blue-500">{values.name.length}</span>/20
            </span>
          </div>
          <Input
            id="crew-name"
            variant="filled"
            value={values.name}
            name="name"
            onChange={handleChange}
            placeholder="크루명을 20자 이내로 입력해주세요."
            maxLength={20}
            classNames={{
              input:
                'h-11 py-2.5 px-4 bg-gray-100 placeholder:text-gray-400 text-base font-medium rounded-xl',
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
              placeholder="메인 카테고리"
              name="category1"
              value={values.category1}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, category1: newValue }))
              }
              data={categoryData.map((category) => category.title)}
              className="flex-1"
            />
            <DropDown
              variant="default"
              placeholder="세부 카테고리"
              name="category2"
              value={values.category2}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, category2: newValue }))
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
            <FileInputWrap value={values.image} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="crew-category" className="text-xl font-semibold text-gray-800">
            지역을 선택해주세요.
          </label>
          <div className="flex justify-between gap-4">
            <DropDown
              variant="default"
              placeholder="특별시/도"
              name="region1"
              value={values.region1}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, region1: newValue }))
              }
              data={regionData.map((region) => region.main)}
              className="flex-1"
            />
            <DropDown
              variant="default"
              placeholder="시/군/구"
              name="region2"
              value={values.region2}
              onChange={(newValue) =>
                setValues((prevValues) => ({ ...prevValues, region2: newValue }))
              }
              data={regionData[regionIndex]?.areas}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
