import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import activeHeart from '@/public/assets/icons/active-heart.svg';
import defaultHeart from '@/public/assets/icons/default-heart.svg';

/**
 * LikeBtn
 *
 * @param {number} id - 해당 모임의 고유 id
 * @param {boolean} isLiked - 초기 좋아요 상태 (true이면 좋아요가 활성화된 상태)
 * @param {(id: number, liked: boolean) => void} onLikeToggle - 좋아요 상태 변경 시 호출되는 함수
 * @param {number} [size=64] - 버튼의 크기 (기본값: 64)
 */
interface LikeButtonProps {
  id: number;
  isLiked: boolean;
  onLikeToggle?: (id: number, liked: boolean) => void;
  size?: number;
}

export default function LikeBtn({ id, isLiked, onLikeToggle, size = 64 }: LikeButtonProps) {
  const [liked, setLiked] = useState(isLiked);
  const [animating, setAnimating] = useState(false);
  const scaleAnimation = liked ? [1, 0] : [0, 1.3, 1];

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      setLiked(!liked);
      setAnimating(false);
      onLikeToggle?.(id, !liked);
    }, 400);
  };

  return (
    <motion.div
      role="button"
      className="relative flex cursor-pointer items-center justify-center rounded-full border-gray-300"
      onClick={handleClick}
      style={{ width: size, height: size }}
      animate={{
        backgroundColor: liked ? 'rgb(254 226 226)' : 'rgb(243 244 246)',
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={defaultHeart} alt="empty heart" width={size * 0.6} height={size * 0.6} />
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: liked ? 1 : 0 }}
        animate={animating ? { scale: scaleAnimation } : {}}
        transition={{ duration: 0.4 }}
      >
        <Image src={activeHeart} alt="red heart" width={size * 0.7} height={size * 0.7} />
      </motion.div>
    </motion.div>
  );
}
