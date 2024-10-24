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
  const isTablet = useMediaQuery('(min-width: 745px) and (max-width: 1200px)');

  const cardClassName = isMobile ? 'w-[340px]' : isTablet ? 'w-[360px]' : 'w-[380px]';

  const carouselWidth = () => {
    if (isMobile) {
      return 340;
    } else if (isTablet) {
      return 360 * 2 + 16;
    } else {
      return 380 * 3 + 32;
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: `${carouselWidth()}px` }}>
      <Carousel
        withIndicators
        height="auto"
        slideGap="16px"
        slideSize={isMobile ? '100%' : isTablet ? '50%' : '33.33%'}
        slidesToScroll={isMobile ? 1 : isTablet ? 2 : 3}
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