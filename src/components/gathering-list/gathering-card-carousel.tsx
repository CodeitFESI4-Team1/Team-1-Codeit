'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { gatheringData } from '@/src/mock/gathering-data';
import IcoLeft from '@/public/assets/icons/ic-left.svg';
import IcoRight from '@/public/assets/icons/ic-right.svg';

/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

export default function GatheringCardCarousel() {
  // 반응형 구간 체크
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(min-width: 745px) and (max-width: 1200px)');

  // 상태 변수 초기화
  const [slideSize, setSlideSize] = useState('100%');
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [maxWidth, setMaxWidth] = useState(340);

  // 화면 크기 변화에 따른 캐러셀 설정 업데이트
  useEffect(() => {
    if (isMobile) {
      setSlideSize('100%');
      setSlidesToScroll(1);
      setMaxWidth(340);
    } else if (isTablet) {
      setSlideSize('50%');
      setSlidesToScroll(2);
      setMaxWidth(360 * 2 + 16);
    } else {
      setSlideSize('33.33%');
      setSlidesToScroll(3);
      setMaxWidth(380 * 3 + 32);
    }
  }, [isMobile, isTablet]);

  const cardClassName = isMobile ? 'w-[340px]' : isTablet ? 'w-[360px]' : 'w-[380px]';

  return (
    <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
      <Carousel
        nextControlIcon={<Image src={IcoRight} alt="right icon" width={8} height={8} />}
        previousControlIcon={<Image src={IcoLeft} alt="left icon" width={8} height={8} />}
        withIndicators
        height="auto"
        slideGap="16px"
        slideSize={slideSize}
        slidesToScroll={slidesToScroll}
        loop={false}
        align="start"
        dragFree
        classNames={{
          indicator: 'gathering-carousel-indicator',
          control: 'gathering-carousel-control',
        }}
        controlSize={32}
        withControls
      >
        {gatheringData.data.map((card, index) => (
          <Carousel.Slide key={index}>
            <GatheringCard {...card} className={`mb-10 ${cardClassName}`} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
