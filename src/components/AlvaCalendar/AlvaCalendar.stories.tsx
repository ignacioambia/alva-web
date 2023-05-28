import type { Meta, StoryObj } from "@storybook/react";

import { AlvaCalendar } from "./AlvaCalendar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Calendar/Calendar",
  component: AlvaCalendar,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof AlvaCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    onChange: (day: Date) => {
      console.log('Alva Calendar day just changed', day);
    }
  },
};
