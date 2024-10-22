import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import FileInput, { FileInputProps } from './file-input';
import { FileValueType } from './file-input-container';

const meta: Meta = {
  title: 'Components/input/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'file',
      },
      description: '선택된 파일',
    },
    isBlur: {
      control: 'boolean', // Storybook UI에서 제어할 수 있도록 설정
      description: '블러 상태를 지정하는 boolean 값',
    },
    onChange: { action: 'onChange', description: '파일 선택 시 호출되는 핸들러' },
  },
};

export default meta;

const Template: StoryFn<FileInputProps> = function FileInputStory(
  args: FileInputProps = { isBlur: false, value: null, onChange: () => {} },
) {
  const [fileValue, setFileValue] = useState<FileValueType>({ image: null });

  return (
    <FileInput
      value={fileValue.image}
      onChange={(newValue) => {
        action('onChange')({ image: newValue });
        setFileValue({ image: args.value });
      }}
      isBlur={args.isBlur} // 기본값이 설정된 args에서 isBlur 값을 받아서 UI에 반영
    />
  );
};

// 스타일이나 UI가 동적으로 변경되는 스토리
export const WithDynamicStyle = Template.bind({});
WithDynamicStyle.args = {
  value: null,
  isBlur: false,
  onChange: (newValue: File | null) => {
    action('onChange')({ image: newValue });
  },
};
