type ImageList = {
  imagePath: string;
};

export type CrewCardInform = {
  crewId: number;
  type: string;
  subType: string;
  name: string;
  location: string;
  detailedLocation: string;
  participantCount: number;
  capacity: number;
  images: ImageList[];
  createdBy: number;
  createdDate: Date;
  updatedDate: Date;
  canceledAt: Date;
  isConfirmed: boolean;
};

/**
 * CrewCard 컴포넌트
 * @param {string} name - 크루 이름
 * @param {string} location - 크루 지역
 * @param {number} participantCount - 현재 참여 인원
 * @param {number} capacity - 수용 인원
 * @param {boolean} isConfirmed - 개설확정여부
 * @param {Date} canceledDate - 취소날짜
 * @returns {JSX.Element}
 */

interface CrewCardProps {
  name: string;
  location: string;
  participantCount: number;
  capacity: number;
  isConfirmed: boolean;
  canceledDate?: Date;
}

export default function CrewCard({
  name,
  location,
  participantCount,
  capacity,
  isConfirmed,
  canceledDate = undefined,
}: CrewCardProps) {
  return (
    <div>
      <span>{name}</span>
      <span>{location}</span>
      <span>{participantCount}</span>
      <span>{capacity}</span>
      <span>{isConfirmed}</span>
      {canceledDate && <span>취소됨</span>}
    </div>
  );
}
