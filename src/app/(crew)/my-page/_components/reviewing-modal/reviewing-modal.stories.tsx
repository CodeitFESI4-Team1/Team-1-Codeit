import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import ReviewingModal, { ReviewingModalProps } from './reviewing-modal';

const meta: Meta<typeof ReviewingModal> = {
  title: 'review/review-modal',
  component: ReviewingModal,
  argTypes: { opened: { control: 'boolean' } },
};

export default meta;
const Template: StoryFn<ReviewingModalProps> = function GatheringDetailModalStory({
  opened,
}: ReviewingModalProps) {
  const [isOpened, setIsOpened] = useState(opened);

  const handleOpen = () => {
    action('Modal Opened')();
    setIsOpened(true);
  };

  const handleClose = () => {
    action('Modal Closed')();
    setIsOpened(false);
  };

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ReviewingModal opened={isOpened} close={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
