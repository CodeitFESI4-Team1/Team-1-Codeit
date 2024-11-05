import { Profile } from '@/src/components/common/profile';
import { CrewMemberList } from '@/src/types/crew-card';

interface ProfilesProps {
  profiles: CrewMemberList[];
  size: 'small' | 'medium';
}

export default function Profiles({ profiles, size }: ProfilesProps) {
  const shows = 4; // 최대 표시할 프로필 수를 고정값으로 설정
  const visibleProfiles = profiles.slice(0, shows);
  const extraCount = profiles.length - shows;

  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-7.5 h-7.5',
  };

  return (
    <ul className="flex items-center pl-2.5">
      {visibleProfiles.map((profile) => (
        <li key={profile.id} className={`relative ml-[-10px] ${sizeMap[size]}`}>
          <Profile size="full" imageUrl={profile.profileImageUrl || undefined} editable={false} />
        </li>
      ))}
      {extraCount > 0 && (
        <li className="relative ml-[-10px]">
          <span className={`${sizeMap[size]} flex flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold leading-[normal] text-gray-800`}>
            +{extraCount}
          </span>
        </li>
      )}
    </ul>
  );
}
