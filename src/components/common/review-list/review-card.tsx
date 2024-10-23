'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Heart from '@/public/assets/icon/ic-heart';

export type Gathering = {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: Date;
  location: string;
  image: string;
};

export type User = {
  teamId: number;
  id: number;
  name: string;
  image: string;
};

export type Review = {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: Date;
  gathering: Gathering;
  user: User;
};

export type ReviewList = Review[];

/**
 * ReviewCard 컴포넌트
 *
 * @param {number} [props.score] - 평점
 * @param {string} [props.comment] - 리뷰 내용
 * @param {Date} [props.createdAt] - 게시 일시
 * @param {User} [props.user] - 게시인
 * @param {boolean} [props.imageAvailable] - 썸네일 이미지 유무, 기본값 'false'
 * @param {boolean} [props.clickable] - 클릭 가능한지, 기본값 'false'
 * @returns {JSX.Element} - ReviewCard
 */

interface ReviewCardProps {
  score: number;
  comment: string;
  createdAt: Date;
  user: User;
  imageAvailable?: boolean;
  clickable?: boolean;
  gatheringId: number;
}

// NOTE: 추후 reviewHeart 컴포넌트로 교체
function MockScore({ score }: { score: number }) {
  const filledHearts = Math.ceil((score / 100) * 5);

  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Heart key={`${score - index}`} fill={index < filledHearts ? '#EA580C' : '#E5E7EB'} />
      ))}
    </div>
  );
}

export default function ReviewCard({
  score,
  comment,
  createdAt,
  user,
  imageAvailable = false,
  clickable = false,
  gatheringId,
}: ReviewCardProps) {
  const [prefetched, setPrefetched] = useState(new Set());
  const CREWPAGE = `/detail/${gatheringId}`;
  const router = useRouter();

  const handleClick = () => {
    if (clickable) router.push(CREWPAGE);
  };

  const handlePrefetch = () => {
    if (clickable && !prefetched.has(CREWPAGE)) router.prefetch(CREWPAGE);
    setPrefetched(new Set(prefetched).add(CREWPAGE));
  };

  // NOTE: Date를 YYYY.MM.DD 형식으로 변환
  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}.${mm}.${dd}`;
  };

  const reviewDate = formatDate(createdAt);

  return (
    <div
      role="presentation"
      onClick={handleClick}
      onMouseEnter={handlePrefetch}
      className={`flex w-full flex-col items-start border-[2px] border-gray-400 px-[60px] py-4 ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <MockScore score={score} />
      <p className="mb-2 mt-2.5 text-sm font-medium">{comment}</p>
      <div className="flex items-center text-xs">
        <span className="relative h-6 w-6 rounded-full bg-red-500">
          <Image src={user.image} alt={user.name} fill />
        </span>
        <span className="relative block w-fit px-2 after:absolute after:right-0 after:content-['|']">
          {user.name}
        </span>
        <span className="ml-3 text-gray-500">{reviewDate}</span>
      </div>
    </div>
  );
}