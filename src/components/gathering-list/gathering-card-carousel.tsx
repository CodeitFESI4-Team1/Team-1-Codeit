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
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const cardWidthLg = 357; // LG 기준 카드 너비
  const cardGapLg = 16; // 카드 간 간격
  const cardWidthSm = 300; // 모바일 기준 카드 너비
  const cardGapSm = 16; // 모바일 간 카드 간격
  const totalSlides = gatheringData.length;

  useEffect(() => {
    const updateView = () => setIsDesktop(window.innerWidth >= 1024);
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  // 스크롤 상태를 기반으로 그라데이션 표시 여부 결정
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined; // 항상 값을 반환하도록 undefined 추가

    const updateGradients = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;

      // 왼쪽: 스크롤이 약간이라도 존재하면 보이게
      setShowLeftGradient(scrollLeft > 0);

      // 오른쪽: 스크롤이 끝에 도달하지 않았을 때 보이게
      setShowRightGradient(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateGradients(); // 초기 상태 업데이트
    slider.addEventListener('scroll', updateGradients);

    return () => slider.removeEventListener('scroll', updateGradients);
  }, [sliderRef]);

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
