'use client';

import Image from 'next/image';
import CreateCrewForm from '@/src/app/(crew)/crew/_components/create-crew-form';
import { CreateCrewRequestTypes } from '@/src/types/create-crew';
import IcoCreateCrew from '@/public/assets/icons/ic-create-crew.svg';

export default function CreateCrewPage() {
  const initialValue: CreateCrewRequestTypes = {
    title: '',
    mainCategory: '',
    subCategory: '',
    imageUrl: null,
    mainLocation: '',
    subLocation: '',
    totalCount: 0,
  };

  const handleSubmit = () => {
    // TODO : POST API 연결
  };

  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 py-11 shadow-bg">
      <div className="lg:px-8.5 flex flex-col gap-8 px-3 md:px-8">
        <div className="flex items-center gap-3">
          <figure className="relative h-16 w-20">
            <Image
              src={IcoCreateCrew}
              fill
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt=""
            />
          </figure>
          <h2 className="text-3.5xl font-bold text-gray-900">크루 만들기</h2>
        </div>
        <CreateCrewForm data={initialValue} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
