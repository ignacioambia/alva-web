import type { Meta, StoryObj } from '@storybook/react';

import { AlvaInput } from './AlvaInput';
import { Icon } from '@iconify/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'General/Text input',
  component: AlvaInput,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof AlvaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
   icon: <Icon icon="material-symbols:phone-enabled-sharp" />,
   label: 'Número de teléfono'
  },
};

export const Filled: Story = {
  args: {
    icon: <Icon icon="tabler:face-id" />,
    label: "Nombre",
    value: "John Doe",
  },
};

export const WithErrors: Story = {
  args: {
    icon: <Icon icon="tabler:face-id" />,
    label: "Nombre",
    value: "Ignacio Ambia",
    errorHandler: {
      inputIsValid: (input: any) => input.length <= 5,
      msg: "Nombre incompleto",
    },
  },
};