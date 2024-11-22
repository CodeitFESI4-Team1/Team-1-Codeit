import { Meta, StoryFn } from '@storybook/react';
import { CreateCrewFormTypes, CreateCrewRequestTypes } from '@/src/types/create-crew';
import CreateCrewForm from '.';

const initialValue: CreateCrewRequestTypes = {
  title: '',
  mainCategory: '',
  subCategory: '',
  imageUrl: '',
  mainLocation: '',
  subLocation: '',
  totalCount: 0,
  introduce: '',
};

export default {
  title: 'crew/create-crew-form',
  component: CreateCrewForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: '크루 작성/수정에 사용되는 폼입니다.',
      },
    },
  },
} as Meta<typeof CreateCrewForm>;

const Template: StoryFn<CreateCrewFormTypes> = function CreateCrewPageStory() {
  return <CreateCrewForm data={initialValue} type="create" />;
};

export const Default = Template.bind({});
Default.args = {};
