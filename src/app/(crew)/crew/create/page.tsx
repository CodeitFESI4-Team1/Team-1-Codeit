'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Loader } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCrew } from '@/src/_apis/crew/crew';
import { getImageUrl } from '@/src/_apis/image/get-image-url';
import CreateCrewForm from '@/src/app/(crew)/crew/_components/create-crew-form';
import Toast from '@/src/components/common/toast';
import { CreateCrewFormTypes, CreateCrewRequestTypes } from '@/src/types/create-crew';
import IcoCreateCrew from '@/public/assets/icons/ic-create-crew.svg';

export default function CreateCrewPage() {
  const router = useRouter();
  const initialValue: CreateCrewFormTypes = {
    title: '',
    mainCategory: '',
    subCategory: null,
    imageUrl: null,
    mainLocation: '',
    subLocation: null,
    totalCount: 4,
  };
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: CreateCrewRequestTypes) => createCrew(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['crewLists', 'crewDetail'] });
      router.push(`/crew/detail/${response?.crewId}`);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      Toast({ message: '크루 생성하기에 실패했습니다.', type: 'error' });
    },
  });

  const handleSubmit = async (data: CreateCrewFormTypes) => {
    let newImageUrl = data.imageUrl as string;
    if (data.imageUrl instanceof File) {
      const imgResponse = await getImageUrl(data.imageUrl, 'CREW');
      newImageUrl = imgResponse?.imageUrl as string;
    }
    const newData: CreateCrewRequestTypes = {
      title: data.title,
      mainCategory: data.mainCategory,
      subCategory: data.subCategory ?? '',
      imageUrl: newImageUrl ?? '',
      mainLocation: data.mainLocation,
      subLocation: data.subLocation ?? '',
      totalCount: data.totalCount,
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
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt=""
          />
        </figure>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3.5xl">크루 만들기</h2>
      </div>
      <CreateCrewForm data={initialValue} onSubmit={handleSubmit} />
    </div>
  );
}
