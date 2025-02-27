import type { Meta, StoryObj } from "@storybook/react";

import { TopRow } from "./TopRow";

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
  args: {},
};
