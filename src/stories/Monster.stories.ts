import type { Meta, StoryObj } from "@storybook/react";

import { Monster } from "./Monster";

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

export const ButtonContainer: Story = {
  args: {
    filename: "ghost.png",
    health: 350,
    score: 300,
  },
};
