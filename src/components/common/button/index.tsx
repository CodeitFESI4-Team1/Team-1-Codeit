import { ReactNode } from 'react';

/**
 * Button 컴포넌트
 *
 * @param children - 버튼 내부에 들어가는 콘텐츠
 * @param className - 길이조절, 클래스로 버튼 스타일 지정(btn-filled, btn-outlined, btn-disabled)
 * @param onClick - 버튼 클릭 시 호출되는 함수
 * @param type - 버튼 타입 ('button', 'submit', 'reset' 중 하나로 기본값은 'button')
 */

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  className = '',
  type = 'button',
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`typo-lg-semibold flex items-center justify-center rounded-xl py-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
