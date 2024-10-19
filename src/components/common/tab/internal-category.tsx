'use client';

import { Carousel } from '@mantine/carousel';
import { v4 as uuidv4 } from 'uuid';

interface InternalCategoryProps {
  items: string[];
}

export default function InternalCategory({ items }: InternalCategoryProps) {
  return (
    <Carousel
      withIndicators
      height={44}
      slideSize="10%"
      slideGap="md"
      align="start"
      slidesToScroll={10}
      classNames={{
        container: 'flex gap-2',
        slide: 'w-1/10 bg-[#F0E8FC] rounded-xl text-center p-2',
        controls: `${items.length <= 10 && 'hidden'}`,
      }}
    >
      {items.map((item: string) => (
        <Carousel.Slide key={uuidv4()}>{item}</Carousel.Slide>
      ))}
    </Carousel>
  );
}
