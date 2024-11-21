import Image from 'next/image';
import { Menu } from '@mantine/core';
import { cn } from '@/src/utils/cn';
import Button from '@/src/components/common/input/button';
import { Profile } from '@/src/components/common/profile';
import ProgressBar from '@/src/components/common/progress-bar';
import { CrewDetail, CrewDetailMember } from '@/src/types/crew-card';
import Check from '@/public/assets/icons/ic-check.svg';
import EmailIco from '@/public/assets/icons/ic-email.svg';
import ShareIco from '@/public/assets/icons/ic-share.svg';
import IcoUser from '@/public/assets/icons/ic-user.svg';
import KebabIcon from '@/public/assets/icons/kebab-btn.svg';

interface DetailCrewPresenterProps {
  data: CrewDetail;
  isCaptain: boolean;
  isMember: boolean;
  isJoining: boolean;
  isConfirmed: boolean;
  handleJoinClick: () => void;
  handleLeaveCrew: () => void;
  handleDelete: () => void;
  onShareClick: () => void;
}

export default function DetailCrewPresenter({
  data,
  isCaptain,
  isMember,
  isConfirmed,
  handleJoinClick,
  handleLeaveCrew,
  handleDelete,
  onShareClick,
  isJoining,
}: DetailCrewPresenterProps) {
  const {
    id,
    title,
    introduce,
    mainLocation,
    subLocation,
    participantCount,
    totalCount,
    imageUrl,
    crewMembers,
  } = data;

  // captain과 members 분리
  const captain = crewMembers.find((member) => member.captain) as CrewDetailMember;
  const members = crewMembers.filter((member) => !member.captain);

  const getJoinButtonText = () => {
    if (isConfirmed) return '모집 완료';
    if (isMember) return '참여 완료';
    if (isJoining) return '참여 중...';
    return '크루 참여하기';
  };

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
      {/* 상단 이미지와 정보 영역 */}
      <div className="relative h-96 w-full overflow-hidden rounded-lg p-6 shadow-sm">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 744px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.0)] via-transparent to-[rgba(0,0,0,0.8)]" />

        {/* 오버레이 컨테이너 */}
        <div className="absolute bottom-6 left-6 space-y-4 text-white">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-base font-medium">
            {mainLocation} {subLocation}
          </p>
          <Button
            className={cn('px-4 py-2', isMember ? 'btn-disabled' : 'btn-filled')}
            onClick={handleJoinClick}
            disabled={isMember || isJoining || isConfirmed}
          >
            {getJoinButtonText()}
          </Button>
        </div>

        {/* 오른쪽 하단 공유 및 케밥 버튼 */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-2">
          <button type="button" className="bg-transparent" onClick={onShareClick}>
            <Image src={ShareIco} alt="공유하기" className="h-6 w-6" />
          </button>
          {isCaptain || isMember ? (
            <Menu trigger="click" position="bottom-end" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <button type="button" className="cursor-pointer">
                  <Image src={KebabIcon} alt="더보기" width={20} height={20} />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                {isCaptain ? (
                  <>
                    <Menu.Item
                      component="a"
                      href={`/crew/detail/${id}/edit`}
                      className="font-pretendard text-gray-700"
                    >
                      크루 수정하기
                    </Menu.Item>
                    <Menu.Item
                      type="button"
                      onClick={handleDelete}
                      className="font-pretendard text-red-600"
                    >
                      크루 삭제하기
                    </Menu.Item>
                  </>
                ) : (
                  <Menu.Item
                    type="button"
                    onClick={handleLeaveCrew}
                    className="font-pretendard text-red-600"
                  >
                    크루 탈퇴하기
                  </Menu.Item>
                )}
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </div>
      </div>

      {/* 소개 및 참여 인원 영역 */}
      <div className="flex flex-col gap-4 md:flex-row lg:flex-1">
        {/* 크루장, 소개 영역 */}
        <div className="md:basis-4/7 flex h-64 w-full flex-col space-y-4 rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Profile imageUrl={captain.profileImageUrl} isCaptain />
            <div className="flex flex-col space-y-1">
              <p className="text-2xl font-semibold">
                {captain.nickname} <span className="text-blue-500">크루장</span>
              </p>
              <div className="flex items-center space-x-1">
                <Image src={EmailIco} alt="이메일 아이콘" width={16} height={16} />
                <p className="text-sm font-normal text-gray-500">{captain!.email}</p>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-gray-200 pt-4">
            <p className="mb-2 text-base font-semibold text-blue-500">크루 소개</p>
            <div className="h-20 overflow-y-auto text-base font-normal text-gray-700">
              {introduce || '소개 정보가 없습니다.'}
            </div>
          </div>
        </div>

        {/* 참여 인원 영역 */}
        <div className="md:basis-3/7 flex h-64 w-full flex-col rounded-lg p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={IcoUser} alt="유저 아이콘" width={20} height={20} />
              <span className="text-base font-medium text-gray-700">크루멤버</span>
              <span className="pl-1 text-base font-medium text-blue-500">{participantCount}</span>
              <span className="text-base font-medium text-gray-700">/{totalCount}</span>
            </div>
            {isConfirmed && (
              <div className="flex items-center text-blue-600">
                <Image src={Check} alt="모집 완료 아이콘" width={24} height={24} />
                <span className="text-sm font-medium">모집 완료</span>
              </div>
            )}
          </div>
          <div className="w-full">
            <ProgressBar total={totalCount} current={participantCount} />
            <p className="pt-1 text-sm text-gray-500">크루장을 제외한 멤버 목록입니다.</p>
          </div>
          <div className="mt-4 h-40 space-y-6 overflow-y-auto">
            {members.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <Profile imageUrl={member.profileImageUrl} />
                    </div>
                    <span className="text-base font-medium text-gray-700">{member.nickname}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                <p className="text-base font-medium">크루장 외에 아직 크루원이 없습니다.</p>
                <p className="text-sm font-medium text-blue-400">크루에 참여해보세요!🙌</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
