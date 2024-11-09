import { useState } from 'react';
import { StaticImageData } from 'next/image';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import ImgCrewSamples from '@/public/assets/images/crew-sample';
import FileSample, { FileSampleProps } from '.';

const meta: Meta = {
  title: 'Components/input/file-sample',
  component: FileSample,
  argTypes: {
    image: {
      control: 'text',
      description: '샘플 이미지 URL',
    },
    isBlur: {
      control: 'boolean',
      description: '이미지에 블러를 적용할지 여부',
    },
    onChange: {
      action: 'onChange',
      description: '파일 선택 시 호출되는 핸들러',
    },
  },
};

export default meta;

const Template: StoryFn<FileSampleProps> = function FileInputStory(args: FileSampleProps) {
  const [selectedFile, setSelectedFile] = useState<File | StaticImageData | null>(null);
  const [isBlur, setIsBlur] = useState(false);

  const handleFileChange = (file: File | StaticImageData | null) => {
    setSelectedFile(file);
    setIsBlur(false); // 파일 선택 시 블러 해제
  };

  return (
    <div>
      <div className="relative">
        <FileSample {...args} onChange={handleFileChange} isBlur={isBlur} />
      </div>
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
export const FileSample01 = Template.bind({});
FileSample01.args = {
  image: ImgCrewSamples[0],
  isBlur: false,
  onChange: () => {
    action('onChange');
  },
};
