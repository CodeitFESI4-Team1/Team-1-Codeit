import { useState } from 'react';
import { ComboboxData, Select, SelectProps } from '@mantine/core';
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
  onChange: (newValue: string | null) => void;
  className?: string;
  name: string;
  inWhere?: string;
}

export default function DropDown({
  inWhere = 'default',
  variant,
  data,
  value,
  onChange,
  placeholder,
  className,
  ...rest
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
          <IconArrow direction="down" color={`${isFocused ? '#ffffff' : (inWhere === "form" ? '#1F2937' : '#D1D5DB')}`} />
        )
      }
      placeholder={placeholder}
      classNames={{
        root: `${className}`,
        input: `${variant === 'sort' && (isFocused ? 'sort-bg-on pl-10' : 'sort-bg pl-10')} ${inWhere === "form" ? 'bg-gray-100 placeholder-gray-400' : 'bg-white placeholder-gray-800'} font-pretendard h-10 md:h-11 focus:bg-black focus:placeholder:text-white focus:text-white text-base font-medium rounded-xl border-0 py-2.5 px-3`,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
        option: `py-1 m-1 px-2 mr-0 rounded-xl font-pretendard text-gray-800 text-base font-medium hover:bg-blue-100 ${variant === 'sort' && 'justify-center'}`,
      }}
      styles={{
        root: { '--mantine-spacing-md': 0 },
      }}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
      renderOption={renderSelectOption}
      {...rest}
    />
  );
}
