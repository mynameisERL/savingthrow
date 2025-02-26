import type { Meta, StoryObj } from "@storybook/react";

import { Dice } from "./Dice";

const meta = {
  title: "Example/Dice",
  component: Dice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DiceThreeSelected: Story = {
  args: {
    number: 3,
    isSelected: true,
  },
};

export const DiceThreeSixUnselected: Story = {
  args: {
    number: 6,
    isSelected: false,
  },
};
