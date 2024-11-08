import { Button, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Meta, StoryFn } from '@storybook/react';
import { CreateGatheringRequestType } from '@/src/types/gathering-data';
import CreateGatheringForm from '.';

const initialValue: CreateGatheringRequestType = {
  title: '',
  introduce: '',
  dateTime: '',
  location: '',
  totalCount: 0,
  imageUrl: null,
};

export default {
  title: 'forms/create-gathering-form',
  component: CreateGatheringForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: '약속 작성/수정에 사용되는 폼입니다.',
      },
    },
  },
} as Meta<typeof CreateGatheringForm>;

const Template: StoryFn<CreateGatheringRequestType> = function CreateCrewPageStory() {
  const [createModalOpened, { open: openCreateModal, close: closeCreateModal }] =
    useDisclosure(false);

  return (
    <>
      <Button onClick={openCreateModal}>약속 만들기</Button>
      <Modal
        opened={createModalOpened}
        onClose={closeCreateModal}
        centered
        title="약속 만들기"
        styles={{
          root: { '--modal-size': '520px' },
          content: { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', borderRadius: '12px' },
        }}
        classNames={{
          body: 'p-0',
          title: 'text-xl font-semibold text-gray-900',
        }}
      >
        <div>
          <ScrollArea h={640}>
            <div className="flex flex-col gap-8 p-6">
              <CreateGatheringForm data={initialValue} onClose={closeCreateModal} />
            </div>
          </ScrollArea>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
