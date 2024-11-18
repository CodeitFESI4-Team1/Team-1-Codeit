'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSlider } from '@/src/hooks/use-slider';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { GatheringType } from '@/src/types/gathering-data';
import IcoLeft from '@/public/assets/icons/ic-left.svg';
import IcoRight from '@/public/assets/icons/ic-right.svg';

interface ResponsiveCarouselProps {
  gatheringData: GatheringType[];
  crewId: number;
  onLike: (gatheringId: number) => Promise<void>;
  onUnlike: (gatheringId: number) => Promise<void>;
  onShowLoginModal: () => void;
}

export default function ResponsiveCarousel({
  gatheringData,
  crewId,
  onLike,
  onUnlike,
  onShowLoginModal,
}: ResponsiveCarouselProps) {
  const { sliderRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useSlider();
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidthLg = 357; // LG 기준 카드 너비
  const cardGapLg = 16; // 카드 간 간격
  const totalSlides = gatheringData.length;

  useEffect(() => {
    const updateView = () => setIsDesktop(window.innerWidth >= 1024);
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 3 ? prevIndex - 3 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < totalSlides ? prevIndex + 3 : prevIndex));
  };

  const handleLikeAction = (actionType: 'like' | 'unlike', gatheringId: number) => {
    if (crewId) {
      return actionType === 'like' ? onLike(gatheringId) : onUnlike(gatheringId);
    }
    onShowLoginModal();
    return Promise.resolve();
  };

  if (isDesktop) {
    return (
      <div className="relative mx-auto w-full max-w-[1112px]">
        <div className="relative flex justify-center">
          {/* 카드 컨테이너 */}
          <div className="relative flex w-[1112px] overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (cardWidthLg + cardGapLg)}px)`,
              }}
            >
              {gatheringData.map((card) => (
                <div key={card.id} className="w-[357px] flex-shrink-0">
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

          {/* 화살표 버튼 */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-[-24px] top-1/2 z-10 -translate-y-1/2 transform"
            >
              <Image src={IcoLeft} alt="Previous" width={12} height={12} />
            </button>
          )}
          {currentIndex + 3 < totalSlides && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-[-16px] top-1/2 z-10 -translate-y-1/2 transform"
            >
              <Image src={IcoRight} alt="Next" width={12} height={12} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // 모바일 및 태블릿
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <ul
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scrollbar-hide flex w-full cursor-grab snap-x gap-4 overflow-x-scroll scroll-smooth active:cursor-grabbing"
    >
      {gatheringData.map((card) => (
        <li key={card.id} className="w-[300px] flex-shrink-0 snap-start">
          <GatheringCard
            crewId={crewId}
            {...card}
            className="w-full"
            onLike={() => handleLikeAction('like', card.id)}
            onUnlike={() => handleLikeAction('unlike', card.id)}
          />
        </li>
      ))}
    </ul>
  );
}
