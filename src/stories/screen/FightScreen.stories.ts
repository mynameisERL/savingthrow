import type { Meta, StoryObj } from "@storybook/react";
import { FightScreen } from "./FightScreen";
import Game from "../../Classes/Game";

export default {
  title: "Example/FightScreen",
  component: FightScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof FightScreen>;

export const Fight: StoryObj = {
  args: {
    game: new Game(),
  },
};
