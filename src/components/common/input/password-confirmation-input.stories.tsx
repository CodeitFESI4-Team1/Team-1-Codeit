import { Meta, StoryObj } from '@storybook/react';

import PasswordConfirmationInput from './password-confirmation-input';

const meta: Meta<typeof PasswordConfirmationInput> = {
  title: 'Components/Common/SignupPasswordWithConfirmation',
  component: PasswordConfirmationInput,
};

export default meta;
type Story = StoryObj<typeof PasswordConfirmationInput>;

export const Primary: Story = {};
