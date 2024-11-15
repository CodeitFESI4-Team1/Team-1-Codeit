'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuthStore } from '@/src/store/use-auth-store';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { GatheringType } from '@/src/types/gathering-data';
import IcoLeft from '@/public/assets/icons/ic-left.svg';
import IcoRight from '@/public/assets/icons/ic-right.svg';

interface GatheringCardCarouselProps {
  gatheringData: GatheringType[];
  crewId: number;
  onLike: (gatheringId: number) => Promise<void>;
  onUnlike: (gatheringId: number) => Promise<void>;
  onShowLoginModal: () => void;
}

export default function CustomGatheringCardCarousel({
  gatheringData,
  crewId,
  onLike,
  onUnlike,
  onShowLoginModal,
}: GatheringCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slideSize, setSlideSize] = useState('w-full');

  // 로그인 여부 확인
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = !!token;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 1;
      let newSlideSize = 'w-full';

      if (screenWidth <= 744) {
        newSlidesToShow = 1;
        newSlideSize = 'w-full';
      } else if (screenWidth <= 1200) {
        newSlidesToShow = 2;
        newSlideSize = 'w-[calc(50%-8px)]'; // 두 개일 경우
      } else {
        newSlidesToShow = 3;
        newSlideSize = 'w-[calc(33.33%-12px)]';
      }

      setSlidesToShow(newSlidesToShow);
      setSlideSize(newSlideSize);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [gatheringData.length]);

  const totalSlides = gatheringData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= slidesToShow ? prevIndex - slidesToShow : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow < totalSlides ? prevIndex + slidesToShow : prevIndex,
    );
  };

  const handleLikeAction = (actionType: 'like' | 'unlike', gatheringId: number) => {
    if (isLoggedIn) {
      return actionType === 'like' ? onLike(gatheringId) : onUnlike(gatheringId);
    }
    onShowLoginModal();
    return Promise.resolve();
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-x-hidden">
        <div
          className={`flex min-w-0 transition-transform duration-300 ease-in-out ${
            slidesToShow > 1 ? 'gap-4' : 'gap-0'
          }`}
          style={{
            transform: `translateX(calc(-${(100 / slidesToShow) * currentIndex}% - ${
              currentIndex * (slidesToShow > 1 ? 16 / slidesToShow : 0)
            }px))`,
            width: `${(100 / slidesToShow) * totalSlides}%`,
          }}
        >
          {gatheringData.map((card) => (
            <div key={card.id} className={`flex-shrink-0 ${slideSize} mb-5 lg:min-w-[362px]`}>
              <GatheringCard
                crewId={crewId}
                {...card}
                className="w-full"
                onLike={() => handleLikeAction('like', card.id)}
                onUnlike={() => handleLikeAction('unlike', card.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Control Buttons */}
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/70 p-1 shadow-lg"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full">
            <Image src={IcoLeft} alt="Previous" width={12} height={12} />
          </div>
        </button>
      )}
      {currentIndex + slidesToShow < totalSlides && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/70 p-1 shadow-lg"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full">
            <Image src={IcoRight} alt="Next" width={12} height={12} />
          </div>
        </button>
      )}

      {/* Custom Indicators */}
      <div className="mt-2 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="h-1 rounded-sm transition-all"
            style={{
              width: i === Math.floor(currentIndex / slidesToShow) ? '20px' : '6px',
              backgroundColor:
                i === Math.floor(currentIndex / slidesToShow) ? '#3b82f6' : '#dbeafe',
            }}
          />
        ))}
      </div>
    </div>
  );
}
