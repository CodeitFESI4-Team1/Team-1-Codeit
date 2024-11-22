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
  argTypes: {
    type: {
      control: 'radio',
      options: ['create', 'edit'],
      description: '폼 타입',
      table: { type: { summary: 'create | edit' } },
    },
    data: {
      control: 'object',
      description: '폼 데이터',
      table: { type: { summary: 'CreateCrewFormTypes' } },
    },
    isEdit: { control: 'boolean', description: '수정 여부' },
    onSubmit: {
      action: 'submit',
      table: { type: { summary: '(data: CreateCrewFormTypes) => void' } },
    },
    onEdit: { action: 'edit', table: { type: { summary: '(data: CreateCrewFormTypes) => void' } } },
  },
  parameters: {
    layout: 'fullscreen',
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
