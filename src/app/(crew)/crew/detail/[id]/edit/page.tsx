'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useGetCrewDetailQuery } from '@/src/_queries/crew/crew-detail-queries';
import CreateCrewForm from '@/src/app/(crew)/crew/create/_components/create-crew-form';
import { CreateCrewFormTypes } from '@/src/types/create-crew';
import IcoCreateCrew from '@/public/assets/icons/ic-create-crew.svg';

export default function EditCrewPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCrewDetailQuery(Number(id));

  if (data === undefined) return null;

  // TODO : 테스트중
  const initialValue: CreateCrewFormTypes = {
    title: '',
    mainCategory: '',
    subCategory: '',
    imageUrl:
      'https://crewcrew.s3.ap-northeast-2.amazonaws.com/crew/0e05d971-15a8-4a32-bf03-80d12cae392e',
    mainLocation: '',
    subLocation: '',
    totalCount: 4,
    introduce: '',
  };

  const handleEdit = () => {
    // TODO : PATCH API 연결
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
        <h2 className="text-2xl font-bold text-gray-900 md:text-3.5xl">크루 수정하기</h2>
      </div>
      <CreateCrewForm isEdit data={initialValue} onEdit={handleEdit} />
    </div>
  );
}
