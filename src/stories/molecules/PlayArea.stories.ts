import type { Meta, StoryObj } from "@storybook/react";

import { PlayArea } from "./PlayArea";

const meta = {
  title: "Example/PlayArea",
  component: PlayArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlayArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MidFight: Story = {
  args: {},
};
