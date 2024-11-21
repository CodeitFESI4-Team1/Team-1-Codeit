import { LegacyRef, useEffect, useMemo, useRef, useState } from 'react';
import { ComboboxData, Select } from '@mantine/core';
import IconArrow from '@/public/assets/icons/ic-arrow';

export interface DropDownProps {
  variant: 'default' | 'sort';
  data: ComboboxData;
  name: string;
  placeholder: string;
  value: string | null;
  onChange: (newValue: string | null) => void;
  className?: string;
  inWhere?: string;
  error?: string | null;
  ref?: LegacyRef<HTMLInputElement>;
}

export default function DropDown({
  inWhere = 'default',
  name,
  variant,
  data,
  value,
  onChange,
  placeholder,
  className,
  error,
  ...rest
}: DropDownProps) {
  const [currentValue, setCurrentValue] = useState<string | null>(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const formStyle =
    inWhere === 'form' ? 'bg-gray-100 placeholder-gray-400' : 'bg-white placeholder-gray-800';

  const getColor = useMemo(() => {
    if (isFocused) return '#ffffff';
    if (inWhere === 'form') return '#1F2937';
    return '#D1D5DB';
  }, [isFocused, inWhere]);

  const getFocusStyle = () => {
    if (variant === 'default') {
      return isFocused
        ? 'focus:bg-black focus:text-white focus:placeholder:text-white'
        : 'text-gray-800 placeholder-gray-800';
    }

    return isFocused
      ? 'focus:bg-black focus:text-white focus:placeholder:text-white sort-bg-on pl-10'
      : 'text-gray-800 placeholder-gray-800 sort-bg pl-10';
  };

  const handleChange = (newValue: string | null, option: { value: string; label: string }) => {
    if (newValue === null) {
      setCurrentValue(null);
      onChange(null);
      return;
    }
    setCurrentValue(newValue);
    onChange(option.label);
    setIsFocused(false);
    inputRef.current?.blur();
  };

  useEffect(() => {
    if (value === null) {
      onChange('');
      setCurrentValue(null);
    }
  }, [value]);

  return (
    <Select
      error={error}
      mt="md"
      data={data}
      value={currentValue}
      name={name}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(_value, option) => handleChange(_value, option)}
      color={getColor}
      leftSection=""
      rightSection={variant !== 'sort' && <IconArrow direction="down" color={getColor} />}
      placeholder={placeholder}
      classNames={{
        root: `${className}`,
        input: `${getFocusStyle()} ${formStyle} font-pretendard h-10 md:h-11 text-base font-medium rounded-xl border-0 py-2.5 px-3`,
        section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
        dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
        option: `py-1 m-1 px-2 mr-0 rounded-xl font-pretendard text-gray-800 text-base font-medium hover:bg-blue-100 ${
          variant === 'sort' && 'justify-center'
        }`,
      }}
      styles={{
        root: { '--mantine-spacing-md': 0 },
      }}
      comboboxProps={{
        position: 'bottom',
        middlewares: { flip: false, shift: false },
        offset: 0,
      }}
      withCheckIcon={false}
      ref={inputRef}
      {...rest}
    />
  );
}
