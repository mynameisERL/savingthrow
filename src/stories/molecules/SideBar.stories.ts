import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";
import Round from "../../Classes/Round";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/SideBar",
  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const game = new Game();
game.nextRound();

export const RoundTwo: Story = {
  args: {
   round: game.currentRound,
   enemy: game.currentEnemy
  },
};
