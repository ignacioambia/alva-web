

import type { Meta, StoryObj } from "@storybook/react";

import { AlvaCalendarMonth } from "./AlvaCalendarMonth";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Calendar/CalendarMonth",
  component: AlvaCalendarMonth,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return(
      <div style={{display: 'flex'}}>
        <Story />
      </div>
    )}
  ]

} satisfies Meta<typeof AlvaCalendarMonth>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    month: new Date()
  },
};
