import { ReactNode } from 'react';
import IcHeart from '@/public/assets/icons/ic-heart.svg';

export interface HeartProp {
  point: number;
}

export default function Hearts({ point }: HeartProp): React.ReactNode {
  const imageArray = Array(5).fill(IcHeart);

  return (
    <div className="flex justify-center gap-3">
      {imageArray.map((icon: ReactNode, index) => {
        let heart: ReactNode = icon;
        if (point <= index) {
          heart = <IcHeart key={`heart ${index + 1}`} className="h-6 w-6" fill="blue" />;
        } else {
          heart = <IcHeart key={`heart ${index + 1}`} className="h-6 w-6" />;
        }
        return heart;
      })}
    </div>
  );
}
