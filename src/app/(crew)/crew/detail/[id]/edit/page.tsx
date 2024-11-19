'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Loader } from '@mantine/core';
import { useEditCrewQuery, useGetCrewDetailQuery } from '@/src/_queries/crew/crew-detail-queries';
import CreateCrewForm from '@/src/app/(crew)/crew/create/_components/create-crew-form';
import { CreateCrewFormTypes, EditCrewRequestTypes } from '@/src/types/create-crew';
import IcoCreateCrew from '@/public/assets/icons/ic-create-crew.svg';

export default function EditCrewPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCrewDetailQuery(Number(id));
  const { isPending, mutate } = useEditCrewQuery(Number(id));
  if (data === undefined) return null;

  const handleEdit = async (editedData: CreateCrewFormTypes) => {
    const newData: EditCrewRequestTypes = {
      title: editedData.title,
      mainCategory: editedData.mainCategory,
      subCategory: editedData.subCategory ?? '',
      imageUrl: (editedData.imageUrl as string) ?? '',
      mainLocation: editedData.mainLocation,
      subLocation: editedData.subLocation === '전체' ? '' : (editedData.subLocation ?? ''),
      totalCount: editedData.totalCount,
      introduce: editedData.introduce,
    };

    mutate(newData);
    localStorage.removeItem('editCrew');
  };

  if (isLoading || isPending)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
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
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt=""
          />
        </figure>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3.5xl">크루 수정하기</h2>
      </div>
      <CreateCrewForm type="edit" isEdit data={data as EditCrewRequestTypes} onEdit={handleEdit} />
    </div>
  );
}
