import type { Meta, StoryObj } from "@storybook/react";

import { AlvaCalendarHour } from "./AlvaCalendarHour";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Calendar/CalendarHour",
  component: AlvaCalendarHour,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof AlvaCalendarHour>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    hour: 17
  },
};
