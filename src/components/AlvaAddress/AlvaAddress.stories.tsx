import { Meta, StoryObj } from "@storybook/react";

import { AlvaAddress } from "./AlvaAddress";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Address/AddressComponent",
  component: AlvaAddress,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  decorators: [
    (Story) => {
      return(
      <div style={{width: '370px'}}>
        <Story />
      </div>
    )}
  ]
} satisfies Meta<typeof AlvaAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};