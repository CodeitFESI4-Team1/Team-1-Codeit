import { Profile } from '@/src/components/common/profile';

interface CrewInfoType {
  id: number;
  nickname: string;
  imageUrl?: string | null;
}

interface ProfilesProps {
  profiles: CrewInfoType[];
}

export default function Profiles({ profiles }: ProfilesProps) {
  const shows = 4; // 최대 표시할 프로필 수를 고정값으로 설정
  const visibleProfiles = profiles.slice(0, shows);
  const extraCount = profiles.length - shows;

  return (
    <ul className="flex items-center">
      {visibleProfiles.map((profile) => (
        <li key={profile.id} className="relative ml-[-10px]">
          <Profile size="small" imageUrl={profile.imageUrl || undefined} editable={false} />
        </li>
      ))}
      {extraCount > 0 && (
        <li className="relative ml-[-10px] h-[31px]">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold leading-[normal] text-gray-800">
            +{extraCount}
          </span>
        </li>
      )}
    </ul>
  );
}
