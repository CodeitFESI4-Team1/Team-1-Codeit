import { Button } from '@mantine/core';

// NOTE : 스토리북 예시 컴포넌트
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export default function CustomButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  return <Button type="button">{label}</Button>;
}
