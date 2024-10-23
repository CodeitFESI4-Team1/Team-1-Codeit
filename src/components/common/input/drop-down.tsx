import { useState } from 'react';
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
  const [theme, setTheme] = useState('white');

  return (
    <Select
      mt="md"
      data={data}
      value={value}
      onFocus={() => setTheme('dark')}
      onBlur={() => setTheme('white')}
      onChange={onChange}
      withCheckIcon={false}
      leftSection={
        variant === 'sort' && (
          <svg
            width="24"
            height="24"
            aria-hidden="true"
            className="group-focus:fill-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11L7 7M7 7L11 11M7 7V17"
              stroke={`${theme === 'dark' ? '#ffffff' : '#D1D5DB'}`}
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M21 13L17 17M17 17L13 13M17 17V7"
              stroke={`${theme === 'dark' ? '#ffffff' : '#D1D5DB'}`}
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        )
      }
      rightSection={
        variant !== 'sort' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286L17.9276 8.58286C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
              fill={`${theme === 'dark' ? '#ffffff' : '#D1D5DB'}`}
            />
          </svg>
        )
      }
      placeholder={placeholder}
      classNames={{
        wrapper: `${className}`,
        input: `focus:bg-black focus:placeholder:text-white focus:text-white peer rounded-xl border-0 py-2 px-3 placeholder-gray-800 ${variant === 'sort' && 'pl-9'}`,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
        option: `py-2.5 m-1 px-3 rounded-xl text-gray-800 hover:bg-blue-100 ${variant === 'sort' && 'justify-center'}`,
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
