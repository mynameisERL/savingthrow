import type { Meta, StoryObj } from "@storybook/react";

import { Monster } from "./Monster";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/Monster",
  component: Monster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Monster>;

export default meta;
type Story = StoryObj<typeof meta>;

const game = new Game();
export const ButtonContainer: Story = {
  args: {
    filename: "ghost.png",
    round: game.currentRound,
  },
};
