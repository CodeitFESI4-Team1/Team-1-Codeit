import Image from 'next/image';
import { ComboboxItem, Select } from '@mantine/core';
import IcoArrowDown from '@/public/assets/icon/ic-arrow-down.svg';

export interface DropDownProps {
  data: string[];
  placeholder: string;
  value: string | null;
  onChange: (_value: string | null, option: ComboboxItem) => void;
  className: string;
}

export default function DropDown({ data, value, onChange, placeholder, className }: DropDownProps) {
  return (
    <Select
      mt="md"
      data={data}
      value={value}
      onChange={onChange}
      withCheckIcon={false}
      rightSection={
        <Image src={IcoArrowDown} width={24} height={24} alt="아이콘" aria-hidden="true" />
      }
      placeholder={placeholder}
      classNames={{
        wrapper: `${className}`,
        input: 'rounded-xl border-2 border-gray-100 py-2 px-3 placeholder-gray-800',
        section: 'end-3',
        dropdown: 'rounded-xl shadow-xl p-0',
        option: 'py-2.5 px-4 text-gray-800',
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
