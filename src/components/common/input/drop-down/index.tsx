import { useState } from 'react';
import { ComboboxData, ComboboxItem, Select, SelectProps } from '@mantine/core';
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
  variant: 'default' | 'sort';
  data: ComboboxData;
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
  ...args
}: DropDownProps) {
  const [isFocused, setIsFocused] = useState(false);

  const renderSelectOption: SelectProps['renderOption'] = ({ option }) => (
    <div data-testid="dropDownOption">{option.label}</div>
  );

  return (
    <Select
      mt="md"
      data={data}
      value={value}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={onChange}
      withCheckIcon={false}
      leftSection=""
      rightSection={
        variant !== 'sort' && (
          <IconArrow direction="down" color={`${isFocused === true ? '#ffffff' : '#D1D5DB'}`} />
        )
      }
      placeholder={placeholder}
      classNames={{
        wrapper: `${className}`,
        input: `${variant === 'sort' && (isFocused ? 'sort-bg-on pl-10' : 'sort-bg pl-10')} h-10 md:h-11 focus:bg-black focus:placeholder:text-white focus:text-white text-base font-medium rounded-xl border-0 py-2.5 px-3 placeholder-gray-800 `,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
        option: `py-1 m-1 px-2 mr-0 rounded-xl text-gray-800 text-base font-medium hover:bg-blue-100 ${variant === 'sort' && 'justify-center'}`,
      }}
      styles={{
        root: { '--mantine-spacing-md': 0 },
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
      {...args}
      renderOption={renderSelectOption}
    />
  );
}
