'use client';

import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../styles/theme';

export default function NotFound() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <div className="h-screen md:flex md:items-center md:justify-center">
      <div className="flex h-full flex-col items-center justify-center gap-10 md:relative md:h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="500"
          height="300"
          className="w-full"
          viewBox="0 0 500 300"
        >
          <defs>
            <path
              id="wave"
              d="m-115,50q38-30 75,0t75,0 75,0 75,0
    75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0 75,0
    v20 h-1540 v-20"
              className="translate-y-[110px]"
            />
            <clipPath id="wave-clip-front">
              <use className="animate-wave" href="#wave" />
              <rect x="0" y="0" width="100%" height="180" />
            </clipPath>
            <clipPath id="wave-clip-middle">
              <use className="animate-wave" href="#wave" />
              <rect x="0" y="180" width="100%" height="150" />
            </clipPath>
            <linearGradient id="grad-front" x1="0%" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="100%" stopColor="#3388FF" stopOpacity="1" />
            </linearGradient>
            <text
              id="clipped-wave"
              x={isMobile ? '50' : '0'}
              y="260"
              fontFamily="Helvetica"
              fontWeight="bold"
              fontSize={isMobile ? '15rem' : '18.75rem'}
            >
              404
            </text>
          </defs>
          <use
            href="#clipped-wave"
            clipPath="url(#wave-clip-middle)"
            fill="url(#grad-front)"
            fillOpacity="0.88"
          />
          <use
            href="#clipped-wave"
            clipPath="url(#wave-clip-front)"
            fill="url(#grad-front)"
            fillOpacity="0.77"
          />
        </svg>
        <div className="flex w-full flex-col items-center gap-9 pb-10 md:absolute md:-bottom-10 md:translate-y-full">
          <p className="text-2xl font-semibold text-gray-900">
            &quot;페이지를 찾을 수 없습니다. 😢&quot;
          </p>
          <Link
            href="/"
            className="btn-filled flex h-11 items-center rounded-xl px-16 text-base font-semibold"
          >
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
