import type { Meta, StoryObj } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

const meta = {
  title: 'Cards/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  tags: ['autodocs'],
} as Meta<typeof CatCard>;

export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockCatCardProps.base,
  } as ICatCard,
};
