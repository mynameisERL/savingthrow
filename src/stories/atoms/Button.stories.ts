import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const game = new Game();
export const AttackButton: Story = {
  args: {
    label: "attack",
    game: game,
    disabled: false,
  },
};
export const RollButton: Story = {
  args: {
    label: "roll",
    game: game,
    disabled: false,
  },
};
