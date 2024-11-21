'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSlider } from '@/src/hooks/use-slider';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { GatheringType } from '@/src/types/gathering-data';
import IcoLeft from '@/public/assets/icons/ic-left.svg';
import IcoRight from '@/public/assets/icons/ic-right.svg';

interface CrewGatheringListProps {
  gatheringData: GatheringType[];
  crewId: number;
  onLike: (gatheringId: number) => Promise<void>;
  onUnlike: (gatheringId: number) => Promise<void>;
  onShowLoginModal: () => void;
  onModalAction: () => void;
}

export default function CrewGatheringList({
  gatheringData,
  crewId,
  onLike,
  onUnlike,
  onShowLoginModal,
  onModalAction,
}: CrewGatheringListProps) {
  const { sliderRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useSlider();
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const cardWidthLg = 357;
  const cardGapLg = 16;
  const totalSlides = gatheringData.length;

  useEffect(() => {
    const updateView = () => {
      setIsDesktop(window.innerWidth >= 1200);
      setCurrentIndex(0);
      // 그라데이션 업데이트
      const slider = sliderRef.current;
      if (slider) {
        const { scrollLeft, scrollWidth, clientWidth } = slider;

        setShowLeftGradient(scrollLeft > 0);
        setShowRightGradient(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, [sliderRef]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const updateGradients = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateGradients();
    slider.addEventListener('scroll', updateGradients);

    return () => slider.removeEventListener('scroll', updateGradients);
  }, [sliderRef, isDesktop]);

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
                    onModalAction={onModalAction}
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
    <div className="relative">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <ul
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="scrollbar-hide flex w-full cursor-grab snap-x gap-4 overflow-x-scroll scroll-smooth active:cursor-grabbing"
      >
        {gatheringData.map((card) => (
          <li key={card.id} className="w-72 flex-shrink-0 snap-start">
            <GatheringCard
              crewId={crewId}
              {...card}
              className="w-full"
              onLike={() => handleLikeAction('like', card.id)}
              onUnlike={() => handleLikeAction('unlike', card.id)}
              onModalAction={onModalAction}
            />
          </li>
        ))}
      </ul>

      {/* 왼쪽 그라데이션 */}
      {showLeftGradient && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent" />
      )}

      {/* 오른쪽 그라데이션 */}
      {showRightGradient && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent" />
      )}
    </div>
  );
}
