'use client';

import { useRouter } from 'next/navigation';
import Button from '@/src/components/common/button/index';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex w-screen items-center justify-center">
      <p className="fixed left-1/2 -translate-x-1/2 text-404-back text-blue-50" aria-hidden="true">
        404
      </p>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-404 font-semibold text-blue-500">404</h1>
        <p className="text-2xl font-semibold text-gray-900">
          &quot;죄송합니다. 페이지를 찾을 수 없습니다. 😢&quot;
        </p>
        <Button
          onClick={() => {
            try {
              router.back();
            } catch {
              router.push('/');
            }
          }}
          className="btn-filled mt-20 flex h-11 items-center rounded-xl px-16 text-base font-semibold"
        >
          뒤로 가기
        </Button>
      </div>
      <svg
        className="absolute bottom-0 left-0 h-[20vh] w-screen"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            className="animate-duration-[7s] animate-delay-[2000ms] animate-wave"
            xlinkHref="#gentle-wave"
            x="60"
            y="0"
            fill="#93C5FD"
          />
          <use
            className="animate-duration-[14s] animate-delay-[4000ms] animate-wave"
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="#BFDBFE"
          />
          <use
            className="animate-duration-[20s] animate-delay-[6000ms] animate-wave"
            xlinkHref="#gentle-wave"
            x="0"
            y="5"
            fill="#DBEAFE"
          />
        </g>
      </svg>
    </div>
  );
}
