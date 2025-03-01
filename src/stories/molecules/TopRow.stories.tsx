import type { Meta, StoryObj } from "@storybook/react";

import { TopRow } from "./TopRow";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/TopRow",
  component: TopRow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TopRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyLoadout: Story = {
  args: {
    game: new Game(),
  },
};
