import { LegacyRef, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
  ref,
  ...rest
}: DropDownProps) {
  const {
    control,
    trigger,
    formState: { errors },
  } = useForm();
  const [isFocused, setIsFocused] = useState(false);

  const renderSelectOption: SelectProps['renderOption'] = ({ option }) => (
    <div data-testid="dropDownOption">{option.label}</div>
  );

  const getColor = () => {
    if (isFocused) return '#ffffff';
    if (inWhere === 'form') return '#1F2937';
    return '#D1D5DB';
  };

  useEffect(() => {
    if (value === null) {
      onChange(null);
    }
  }, [value]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: '필수 입력사항입니다.', validate: (inputValue) => inputValue !== '' }}
      render={({ field }) => (
        <Select
          {...field}
          error={errors[name] && '필수 입력사항입니다.'}
          mt="md"
          data={data}
          value={value}
          name={name}
          dropdownOpened={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (inWhere === 'form') trigger(field.name); // react-hook-form의 onBlur 호출
            if (typeof field.onBlur === 'function') {
              setIsFocused(false); // 기존 Select onBlur 호출
            }
          }}
          onChange={(newValue) => {
            field.onChange(newValue); // react-hook-form의 onChange 호출
            onChange(newValue); // 기존 Select onChange 호출
            setIsFocused(false);
          }}
          color={getColor()}
          leftSection=""
          rightSection={variant !== 'sort' && <IconArrow direction="down" color={getColor()} />}
          placeholder={placeholder}
          classNames={{
            root: `${className}`,
            input: `${variant === 'sort' && (isFocused ? 'sort-bg-on pl-10' : 'sort-bg pl-10')} ${inWhere === 'form' ? 'bg-gray-100 placeholder-gray-400' : 'bg-white placeholder-gray-800'} font-pretendard h-10 md:h-11 focus:bg-black focus:placeholder:text-white focus:text-white text-base font-medium rounded-xl border-0 py-2.5 px-3`,
            section: `end-1 ${variant === 'sort' && 'data-[position=right]:hidden start-1'}`,
            dropdown: 'rounded-xl shadow-xl p-0 border-0 mt-2',
            option: `py-1 m-1 px-2 mr-0 rounded-xl font-pretendard text-gray-800 text-base font-medium hover:bg-blue-100 ${variant === 'sort' && 'justify-center'}`,
          }}
          styles={{
            root: { '--mantine-spacing-md': 0 },
          }}
          comboboxProps={{
            position: 'bottom',
            middlewares: { flip: false, shift: false },
            offset: 0,
          }}
          renderOption={renderSelectOption}
          ref={ref as LegacyRef<HTMLInputElement>}
          {...rest}
        />
      )}
    />
  );
}
