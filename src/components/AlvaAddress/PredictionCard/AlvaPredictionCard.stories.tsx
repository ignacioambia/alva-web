import { Meta, StoryObj } from "@storybook/react";

import { AlvaPredictionCard } from "./AlvaPredictionCard";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Address/PredictionCard",
  component: AlvaPredictionCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return(
      <div style={{width: '370px'}}>
        <Story />
      </div>
    )}
  ]
} satisfies Meta<typeof AlvaPredictionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    prediction: {
      description: "Mérida, Yucatan, Mexico",
      place_id: "ChIJFw1Fq1xxVo8RCeurFVcV_F0",
      reference: "ChIJFw1Fq1xxVo8RCeurFVcV_F0",
    },
    selected: false,
  },

  render: ({prediction}) => {
    const [selected, setSelected] = useState<boolean>();

    const handleClickEvent = () => {
      console.log('Hanling click event');
      setSelected((curr) => !curr);
    }
    return <AlvaPredictionCard selected={selected} onClick={handleClickEvent} prediction={prediction} />
  }
};

export const selected: Story = {
  args: {
    prediction: {
      description: "Mérida, Yucatan, Mexico",
      place_id: "ChIJFw1Fq1xxVo8RCeurFVcV_F0",
      reference: "ChIJFw1Fq1xxVo8RCeurFVcV_F0",
    },
    selected: true

  },
};