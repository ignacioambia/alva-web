import type { Meta, StoryObj } from "@storybook/react";

import { AlvaBtn } from "./AlvaBtn";
import { Icon } from "@iconify/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Button",
  component: AlvaBtn,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof AlvaBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Hacer orden",
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    children: "Hacer orden",
  },
};
export const icon: Story = {
  args: {
    disabled: false,
    variant: "icon",
    children: <Icon icon="tabler:face-id"/>
  },
};
