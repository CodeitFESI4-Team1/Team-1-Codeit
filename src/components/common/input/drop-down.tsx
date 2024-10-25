import Image from 'next/image';
import { ComboboxItem, Select } from '@mantine/core';
import IcoArrowDown from '@/public/assets/icon/ic-arrow-down.svg';
import IcoSort from '@/public/assets/icon/ic-sort.svg';

/**
 * DropDown Component
 *
 * @param {Object} props - Profile 컴포넌트의 props
 * @param {"region" | "category" | "sort"} [props.variant] : Dropdown 종류
 * @param {string} [props.className] : Dropdown wrapper 클래스명
 * @returns {JSX.Element} : DropDown component
 */

export interface DropDownProps {
  variant: 'region' | 'category' | 'sort';
  data: string[];
  placeholder: string;
  value: string | null;
  onChange: (_value: string | null, option: ComboboxItem) => void;
  className: string;
}

export default function DropDown({
  variant,
  data,
  value,
  onChange,
  placeholder,
  className,
}: DropDownProps) {
  return (
    <Select
      mt="md"
      data={data}
      value={value}
      onChange={onChange}
      withCheckIcon={false}
      leftSection={
        variant === 'sort' && (
          <Image src={IcoSort} width={24} height={24} alt="아이콘" aria-hidden="true" />
        )
      }
      rightSection={
        variant !== 'sort' && (
          <Image src={IcoArrowDown} width={24} height={24} alt="아이콘" aria-hidden="true" />
        )
      }
      placeholder={placeholder}
      classNames={{
        wrapper: `${className}`,
        input: `rounded-xl border-2 border-gray-100 py-2 px-3 placeholder-gray-800 ${variant === 'sort' && 'pl-9'}`,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0',
        option: 'py-2.5 px-4 text-gray-800',
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
