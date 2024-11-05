import { useRef, useState } from 'react';

interface UseSliderReturn {
  sliderRef: React.RefObject<HTMLUListElement>;
  handleMouseDown: (e: React.MouseEvent<HTMLUListElement>) => void;
  handleMouseLeave: () => void;
  handleMouseUp: () => void;
  handleMouseMove: (e: React.MouseEvent<HTMLUListElement>) => void;
}

export function useSlider(): UseSliderReturn {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDown(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDown) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return { sliderRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove };
}
