import { addons } from '@storybook/preview-api';

import React, { useEffect } from 'react';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';

import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import '@/src/app/globals.css';

import '../src/styles/globals.css';

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider>{renderStory()}</MantineProvider>,
];
