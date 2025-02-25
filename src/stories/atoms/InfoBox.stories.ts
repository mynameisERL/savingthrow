import type { Meta, StoryObj } from "@storybook/react";

import { InfoBox } from "./InfoBox";

const meta = {
  title: "Example/InfoBox",
  component: InfoBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AttacksRemaining: Story = {
    args: {
        label: "attacks",
        datum: 3
    },
};

export const RollsRemaining: Story = {
    args: {
        label: "rolls",
        datum: 2 
    },
};