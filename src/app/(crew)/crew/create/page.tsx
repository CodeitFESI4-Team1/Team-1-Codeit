'use client';

import Image from 'next/image';
import { Loader } from '@mantine/core';
import { useCreateCrewQuery } from '@/src/_queries/crew/crew-detail-queries';
import CreateCrewForm from '@/src/app/(crew)/crew/create/_components/create-crew-form';
import { CreateCrewFormTypes, CreateCrewRequestTypes } from '@/src/types/create-crew';
import IcoCreateCrew from '@/public/assets/icons/ic-create-crew.svg';

const initialValue = {
  title: '',
  mainCategory: '',
  subCategory: '',
  imageUrl: '',
  mainLocation: '',
  subLocation: '',
  totalCount: 4,
  introduce: '',
};

export default function CreateCrewPage() {
  let savedInfo;
  if (typeof window !== 'undefined') {
    const storageInfo = localStorage.getItem('createCrew');
    if (storageInfo) savedInfo = JSON.parse(storageInfo);
  }

  const { isPending, mutate } = useCreateCrewQuery();

  const handleSubmit = async (createdData: CreateCrewFormTypes) => {
    const newData: CreateCrewRequestTypes = {
      title: createdData.title,
      mainCategory: createdData.mainCategory,
      subCategory: createdData.subCategory ?? '',
      imageUrl: (createdData.imageUrl as string) ?? '',
      mainLocation: createdData.mainLocation,
      subLocation: createdData.subLocation === '전체' ? '' : (createdData.subLocation ?? ''),
      totalCount: createdData.totalCount,
      introduce: createdData.introduce,
    };

    mutate(newData);
  };

  if (isPending)
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <Loader size="sm" />
      </div>
    );

  return (
    <div className="lg:px-8.5 flex flex-col gap-3 px-3 py-8 md:gap-4 md:px-8 md:py-12.5 lg:gap-8">
      <div className="flex items-center gap-3">
        <figure className="relative h-16 w-20">
          <Image
            src={IcoCreateCrew}
            fill
            sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover"
            alt=""
          />
        </figure>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3.5xl">크루 만들기</h2>
      </div>
      <CreateCrewForm
        data={savedInfo ?? initialValue}
        onSubmit={handleSubmit}
        type="create"
        isEdit={savedInfo !== undefined}
      />
    </div>
  );
}
