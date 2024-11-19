import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="567"
          height="300"
          className="w-full"
          viewBox="0 0 567 300"
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
            <linearGradient id="grad-front" x1="-22%" y1="0" x2="122%" y2="100%">
              <stop offset="0%" stop-color="#60A5FA" stop-opacity="1" />
              <stop offset="100%" stop-color="#3388FF" stop-opacity="1" />
            </linearGradient>
            <text
              id="clipped-wave"
              x="0"
              y="260"
              font-family="Helvetica"
              font-weight="bold"
              font-size="18.75rem"
            >
              404
            </text>
          </defs>
          <use
            href="#clipped-wave"
            clip-path="url(#wave-clip-middle)"
            fill="url(#grad-front)"
            fill-opacity="0.88"
          />
          <use
            href="#clipped-wave"
            clip-path="url(#wave-clip-front)"
            fill="url(#grad-front)"
            fill-opacity="0.77"
          />
        </svg>
        <div className="absolute -bottom-10 flex w-full translate-y-full flex-col items-center gap-9">
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
