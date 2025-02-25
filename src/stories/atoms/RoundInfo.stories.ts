import type { Meta, StoryObj } from "@storybook/react";

import { RoundInfo } from "./RoundInfo";

const meta = {
  title: "Example/RoundInfo",
  component: RoundInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoundInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundSix: Story = {
    args: {
        round: 6,
        enemy: "Owlbear Cromwell",
        money: 23
    }
};