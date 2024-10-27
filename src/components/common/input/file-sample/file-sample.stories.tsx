import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import FileSample, { FileSampleProps } from '.';

const meta: Meta = {
  title: 'Components/input/file-sample',
  component: FileSample,
  argTypes: {
    imgUrl: {
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

const Template: StoryFn<FileSampleProps> = function FileInputStory(
  args: FileSampleProps = { isBlur: false, imgUrl: '', onChange: () => {} },
) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isBlur, setIsBlur] = useState(false);

  const handleFileChange = (file: File | null) => {
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
      {!isBlur && <p>{selectedFile?.name}</p>}
    </div>
  );
};
export const FileSample01 = Template.bind({});
FileSample01.args = {
  imgUrl:
    'https://images.stockcake.com/public/a/7/6/a768d87b-1f99-4b50-9286-f1583af33522_large/team-huddle-celebration-stockcake.jpg',
  isBlur: false,
  onChange: () => {
    action('onChange');
  },
};
