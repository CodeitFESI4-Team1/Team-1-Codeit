import { Meta, StoryObj } from '@storybook/react';

import SignupPasswordInput from './signup-password-input';

const meta: Meta<typeof SignupPasswordInput> = {
  title: 'Components/Common/SignupPasswordInput',
  component: SignupPasswordInput,
};

export default meta;
type Story = StoryObj<typeof SignupPasswordInput>;

export const Primary: Story = {};
