import type { Meta, StoryObj } from "@storybook/react";

import { AlvaCalendarDay } from "./AlvaCalendarDay";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Calendar/CalendarDay",
  component: AlvaCalendarDay,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof AlvaCalendarDay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    day: new Date()
  },
};
