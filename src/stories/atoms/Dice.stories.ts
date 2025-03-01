import type { Meta, StoryObj } from "@storybook/react";

import { Dice } from "./Dice";
import Hand from "../../Classes/Hand";
import Die from "../../Classes/Die";

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
    index: 3,
    number: 1,
    hand: new Hand(3, 3),
    die: new Die(),
  },
};

export const DiceThreeSixUnselected: Story = {
  args: {
    index: 3,
    number: 1,
    hand: new Hand(3, 3),
    die: new Die(),
  },
};
