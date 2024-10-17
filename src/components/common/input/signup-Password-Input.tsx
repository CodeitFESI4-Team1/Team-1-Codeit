'use client';

import { Box, Center, Group, PasswordInput, Progress, Text } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';
import { v4 as uuidv4 } from 'uuid';

const requirements = [
  { re: /.{6,}/, label: 'Has at least 6 characters' },
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

const requirementsCount = requirements.length;

const getStrength = (password: string) => {
  let multiplier = 0;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / requirements.length) * multiplier, 0);
};

const getProgressValue = (value: string, index: number, strength: number) => {
  if (value.length > 0 && index === 0) {
    return 100;
  }
  if (strength >= ((index + 1) / requirementsCount) * 100) {
    return 100;
  }
  return 0;
};

const getColorByStrength = (strength: number) => {
  if (strength > 80) {
    return 'teal';
  }
  if (strength > 50) {
    return 'yellow';
  }
  return 'red';
};

export default function SignupPasswordInput() {
  const [value, setValue] = useInputState('');
  const strength = getStrength(value);
  return (
    <div>
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="Your password"
        label="Password"
        required
      />

      <Group gap={5} grow mt="xs" mb="md">
        {Array(requirementsCount)
          .fill(0)
          .map((_, index) => (
            <Progress
              styles={{ section: { transitionDuration: '0ms' } }}
              value={getProgressValue(value, index, strength)}
              color={getColorByStrength(strength)}
              key={uuidv4()}
              size={requirementsCount}
            />
          ))}
      </Group>

      {requirements.map((requirement) => (
        <Text
          key={uuidv4()}
          component="div"
          c={requirement.re.test(value) ? 'teal' : 'red'}
          mt={5}
          size="sm"
        >
          <Center inline>
            {requirement.re.test(value) ? (
              <IconCheck size="0.9rem" stroke={1.5} />
            ) : (
              <IconX size="0.9rem" stroke={1.5} />
            )}
            <Box ml={7}>{requirement.label}</Box>
          </Center>
        </Text>
      ))}
    </div>
  );
}
