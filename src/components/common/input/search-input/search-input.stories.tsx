import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import SearchInput, { SearchInputProps } from '.';

const meta: Meta = {
  title: 'Components/input/search-input',
  component: SearchInput,
};

export default meta;
const Template: StoryFn<SearchInputProps> = function SearchInputStory(args: SearchInputProps) {
  return <SearchInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '검색어를 입력해주세요.',
};
