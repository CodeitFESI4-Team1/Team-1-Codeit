/**
 * 프로필 이미지 Component
 * @param {number} id - 받아야하는 프로필들이 들어있는 크루 id
 * @param {number} shows - 몇 개의 프로필까지 보여줄지? 기본값 4
 * @returns {JSX.Element}
 */
import Image from 'next/image';
import defaultProfile from '@/public/assets/icons/default-profile.svg?url';

interface ProfilesProps {
  id: 1 | 2 | 3;
  shows?: number;
}

interface ParticipantsProps {
  userId: number;
  userName: string;
  userImage: string;
}

// NOTE: mock data
const mockProfiles: ParticipantsProps[] = [
  {
    userId: 1,
    userName: '닉네임1',
    userImage: 'https://i.pinimg.com/564x/8c/4a/51/8c4a51e005629a084505649079b0a949.jpg',
  },
  {
    userId: 2,
    userName: '닉네임2',
    userImage: 'https://i.pinimg.com/564x/ab/8d/df/ab8ddf49da46ed16266c4165c35210de.jpg',
  },
  {
    userId: 3,
    userName: '닉네임3',
    userImage: '',
  },
  {
    userId: 4,
    userName: '닉네임4',
    userImage: 'https://i.pinimg.com/474x/fe/fe/fb/fefefb0971cbb828bfeeea8c6ea7ca1a.jpg',
  },
  {
    userId: 5,
    userName: '닉네임5',
    userImage: 'https://i.pinimg.com/736x/05/22/91/0522916c52a9f92a59663d60b9198618.jpg',
  },
  {
    userId: 6,
    userName: '닉네임6',
    userImage: 'https://i.pinimg.com/564x/fd/a1/6c/fda16cfd209309c6c34cf0b73c858968.jpg',
  },
];

export default function Profiles({ id, shows = 4 }: ProfilesProps) {
  // NOTE: id에 따라 가져오는 mock data의 수를 다르게 함 -> 추후 api 함수로 수정
  const num = { 1: 3, 2: 4, 3: 5 };
  const profiles: ParticipantsProps[] = mockProfiles.slice(0, num[id]);
  const showProfiles = profiles.slice(0, shows);
  const others = profiles.length - shows;

  return (
    <ul className="flex items-center gap-0">
      {showProfiles.map((profile) => (
        <li key={profile.userId}>
          <span className="relative ml-[-10px] block h-[29px] w-[29px] overflow-hidden rounded-full">
            <Image
              src={profile.userImage ? profile.userImage : defaultProfile}
              alt={profile.userName}
              fill
              objectFit="cover"
            />
            {profile.userName}
          </span>
        </li>
      ))}
      {others > 0 && (
        <li>
          <span className="typo-sm-semibold relative ml-[-10px] flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#F3F4F6]">
            +{others}
          </span>
        </li>
      )}
    </ul>
  );
}
