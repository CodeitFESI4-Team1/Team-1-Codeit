import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import FileInput, { FileInputProps } from '.';

const meta: Meta = {
  title: 'Components/input/file-input',
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

const Template: StoryFn<FileInputProps> = function FileInputStory() {
  const [fileValue, setFileValue] = useState<File | string | null>(null);
  const [isBlur, setIsBlur] = useState(false);

  return (
    <div>
      <FileInput
        value={fileValue}
        onChange={(newValue) => {
          action('onChange')(newValue);
          setFileValue(newValue);
        }}
        isBlur={isBlur} // 기본값이 설정된 args에서 isBlur 값을 받아서 UI에 반영
      />
      <button
        type="button"
        onClick={() => setIsBlur((prev) => !prev)}
        style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: 'lightgrey' }}
      >
        블러 토글
      </button>
    </div>
  );
};

// 스타일이나 UI가 동적으로 변경되는 스토리
export const FileInput01 = Template.bind({});
FileInput01.args = {
  value: null,
  isBlur: false,
  onChange: (newValue: File | string | null) => {
    action('onChange')({ image: newValue });
  },
};
