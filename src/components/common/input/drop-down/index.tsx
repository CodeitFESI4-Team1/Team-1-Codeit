import { LegacyRef, useEffect, useMemo, useRef, useState } from 'react';
import { ComboboxData, Select, SelectProps } from '@mantine/core';
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
  ...rest
}: DropDownProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    setIsFocused(false);
    if (inWhere === 'form' && !value) {
      setError('필수 입력사항입니다.');
    } else {
      setError(null);
    }
  };

  const handleChange = (newValue: string | null) => {
    onChange(newValue);
    setIsFocused(false);
    inputRef.current?.blur();

    if (inWhere === 'form' && !newValue) {
      setError(newValue ? null : '필수 입력사항입니다.');
    }
  };

  const getColor = useMemo(() => {
    if (isFocused) return '#ffffff';
    if (inWhere === 'form') return '#1F2937';
    return '#D1D5DB';
  }, [isFocused, inWhere]);

  useEffect(() => {
    if (value === null) {
      onChange(null);
    }
  }, [value, onChange]);

  const getFocusStyle = () => {
    if (variant === 'default') {
      return isFocused
        ? 'focus:bg-black focus:text-white focus:placeholder:text-white'
        : 'bg-white text-gray-800 placeholder-gray-800';
    }

    return isFocused
      ? 'focus:bg-black focus:text-white focus:placeholder:text-white sort-bg-on pl-10'
      : 'bg-white text-gray-800 placeholder-gray-800 sort-bg pl-10';
  };
  const formStyle =
    inWhere === 'form' ? 'bg-gray-100 placeholder-gray-400' : 'bg-white placeholder-gray-800';

  return (
    <Select
      error={error}
      mt="md"
      data={data}
      value={value}
      name={name}
      dropdownOpened={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      onChange={handleChange}
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
