import Image from 'next/image';
import Logo from '@/public/assets/images/logo.png';

export interface FloatingButtonProps {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="sm:h-18 fixed bottom-16 right-24 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-blue-500 shadow-sm transition-transform hover:scale-105 hover:bg-blue-400 hover:shadow-md active:scale-105 sm:bottom-10 sm:right-16 sm:w-18 md:h-24 md:w-24"
    >
      <Image src={Logo} alt="crew logo" width={70} height={32} className="mt-2" />
      <span className="typo-lg-bold text-white">참가</span>
    </button>
  );
}
