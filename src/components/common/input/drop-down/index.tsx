import { useState } from 'react';
import { ComboboxData, ComboboxItem, Select } from '@mantine/core';
import IconArrow from '@/public/assets/icons/ic-arrow';

/**
 * drop-down Component
 *
 * @param {Object} props - Profile 컴포넌트의 props
 * @param {"dropdown" | "sort"} [props.variant] : Dropdown 종류
 * @param {string} [props.className] : Dropdown wrapper 클래스명
 * @returns {JSX.Element} : DropDown component
 */

export interface DropDownProps {
  variant: 'dropdown' | 'sort';
  data: ComboboxData | undefined;
  placeholder: string;
  value: string | null;
  onChange: (newValue: string | null, option: ComboboxItem) => void;
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
      leftSection=""
      rightSection={
        variant !== 'sort' && (
          <IconArrow direction="down" color={`${theme === 'dark' ? '#ffffff' : '#D1D5DB'}`} />
        )
      }
      placeholder={placeholder}
      classNames={{
        wrapper: `${className} -mt-4`,
        input: `${variant === 'sort' && (theme === 'white' ? 'sort-bg pl-10' : 'sort-bg-on pl-10')} focus:bg-black focus:placeholder:text-white focus:text-white typo-base-medium rounded-xl border-0 h-10 md:h-11 py-2.5 px-3 placeholder-gray-800`,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
        option: `py-1 m-1 px-2 mr-0 rounded-xl text-gray-800 typo-base-medium hover:bg-blue-100 ${variant === 'sort' && 'justify-center'}`,
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
      styles={{
        root: { 'margin-top': 0, '--maintine-spacing-md': 0 },
      }}
    />
  );
}
