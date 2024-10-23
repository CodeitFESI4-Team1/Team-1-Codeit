'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import GatheringCard from '@/src/components/common/gathering-card/container';
import { gatheringData } from '@/src/mock/gathering-data';

/* eslint-disable no-nested-ternary */

/* eslint-disable react/no-array-index-key */

export default function GatheringCardCarousel() {
  // 반응형 구간 체크
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(min-width: 744px) and (max-width: 1200px)');

  const cardClassName = `
  sm:w-[360px] 
  md:w-[364px] 
  lg:w-[380px]
  mb-10
`;

  return (
    <div className="mx-auto w-full max-w-[1172px]">
      <Carousel
        withIndicators
        height="auto"
        slideGap="16px"
        slideSize={isMobile ? '360px' : isTablet ? '364px' : '380px'}
        slidesToScroll={isMobile ? 1 : isTablet ? 2 : 3}
        loop={false}
        align="start"
        dragFree
        classNames={{
          indicator: 'gathering-carousel-indicator',
          control: 'gathering-carousel-control',
        }}
        controlSize={32}
        withControls={!isMobile}
        controlsOffset="sm"
      >
        {gatheringData.map((card, index) => (
          <Carousel.Slide key={index}>
            <GatheringCard {...card} className={cardClassName} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
