import CrewCard from '@/src/components/common/crew-list/crew-card';
import DetailCrewCard from '@/src/components/common/crew-list/detail-crew-card';

export default function CrewDetailPage() {
  const crewData = {
    id: 1,
    name: '엄청긴크루이름엄청긴크루이름엄청긴크',
    location: '경기도',
    participantCount: 20,
    capacity: 24,
    thumbnail: 'https://i.pinimg.com/564x/f8/8d/c5/f88dc5b857caf6c303ae5ef9dd12e7fb.jpg',
    isConfirmed: true,
    gatheringCount: 3,
    crewList: [
      {
        id: 1,
        nickname: 'User1',
        imageUrl: 'https://i.pinimg.com/564x/e2/25/bb/e225bb492dc7a20a549f3c0abec28eb8.jpg',
      },
      {
        id: 2,
        nickname: 'User2',
      },
      {
        id: 3,
        nickname: 'User3',
        imageUrl: 'https://i.pinimg.com/564x/41/56/d8/4156d8253b6d76e5455d28b44bd1a1e0.jpg',
      },
      {
        id: 4,
        nickname: 'User4',
        imageUrl: 'https://i.pinimg.com/564x/e2/e6/47/e2e64732424094c4e9e2643aaaf4389e.jpg',
      },
      {
        id: 5,
        nickname: 'User5',
        imageUrl: 'https://i.pinimg.com/564x/17/06/45/170645a5f7b8a76f04c15b226b22cf90.jpg',
      },
    ],
  };

  return (
    <div className="flex max-w-[1200px] gap-4">
      <CrewCard {...crewData} />
      <CrewCard {...crewData} />
    </div>
  );
}
