import { useCallback, useState } from 'react';
import GatheringDetailModalContainer from '@/src/app/(crew)/crew/_components/gathering-detail-modal/container';
import ScheduledGatheringCardPresenter from './presenter';

interface ScheduledGatheringCardContainerProps {
  data: {
    id: number;
    crewTitle: string;
    crewMainLocation: string;
    crewSubLocation: string;
    title: string;
    dateTime: string;
    currentCount: number;
    totalCount: number;
    imageUrl: string;
    isLiked: boolean;
  };
}

export default function ScheduledGatheringCardContainer({
  data,
}: ScheduledGatheringCardContainerProps) {
  const [isOpened, setIsOpened] = useState(false);
  // TODO: modalData 연결
  // const { data: modalData } = useQuery<GatheringDetailType>(useGetGatheringQuery());
  const dummyModalData = {
    id: 1,
    title: '신나는 운동...즐거운..코딩..',
    introduce: '공지사항입니다. 다들 이번 약속 잊지 않으셨죠? 꼭 참여 부탁드립니다~',
    dateTime: '2024-10-29T00:32:12.306Z',
    location: '서울시 강남구 역삼동 오피스타워 3층',
    currentCount: 3,
    totalCount: 10,
    imageUrl:
      'https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg',
    isLiked: false,
    isGatherCaptain: false,
    isParticipant: false,
    participants: [
      {
        id: 1,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '럽윈즈올',
        email: 'youl@email.com',
      },
      {
        id: 2,
        profileImageUrl:
          'https://imgcdn.stablediffusionweb.com/2024/5/13/c0541236-e690-4dff-a27e-30a0355e5ea0.jpg',
        nickname: '모닝러너',
        email: 'youl@email.com',
      },
      {
        id: 3,
        profileImageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMrcQB5OJ-ETzPc6wHnjxjC-36__MGw3JcA&s',
        nickname: '동글동글이',
        email: 'youl@email.com',
      },
    ],
  };

  const handleCardClick = useCallback(() => {
    setIsOpened(true);
    // TODO: retry or refetch사용해서 useQuery부분 안으로 넣기
  }, []);

  const handleLikeToggle = useCallback(() => {
    alert('좋아요 토글됨'); // TODO: 좋아요 토글 로직 구현
  }, []);

  return (
    <div>
      <ScheduledGatheringCardPresenter
        data={data}
        onClick={handleCardClick}
        onLikeToggle={handleLikeToggle}
      />
      {dummyModalData && (
        <GatheringDetailModalContainer
          opened={isOpened}
          close={() => {
            setIsOpened(false);
          }}
          data={dummyModalData}
        />
      )}
    </div>
  );
}
