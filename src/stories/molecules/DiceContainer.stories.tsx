import type { Meta, StoryObj } from "@storybook/react";

import { DiceContainer } from "./DiceContainer";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/DiceContainer",
  component: DiceContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DiceContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const game = new Game();
export const ButtonContainer: Story = {
  args: {
    currentDice: game.currentRound.currentHand.currentDice,
    hand: game.currentRound.currentHand,
  },
};
