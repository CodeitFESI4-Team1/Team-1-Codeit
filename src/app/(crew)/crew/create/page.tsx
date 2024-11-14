'use client';

import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCrew } from '@/src/_apis/crew/crew-list';
import { getImageUrl } from '@/src/_apis/image/get-image-url';
import CreateCrewForm from '@/src/app/(crew)/crew/_components/create-crew-form';
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
  const createCrewMutation = useMutation({
    mutationFn: (data: CreateCrewRequestTypes) => createCrew(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['crewLists', 'crewDetail'] });
      router.push(`/crew/detail/${response?.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
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

    createCrewMutation.mutate(newData);
  };

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
