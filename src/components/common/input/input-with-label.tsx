import { TextInput } from '@mantine/core';

export interface InputProps {
  type: string;
  label: string;
  placeholder: string;
}

export default function InputWithLabel({ type, label, placeholder }: InputProps) {
  return <TextInput type={type} placeholder={placeholder} label={label} />;
}
