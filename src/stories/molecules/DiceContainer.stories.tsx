import type { Meta, StoryObj } from "@storybook/react";

import { DiceContainer } from "./DiceContainer";

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

export const ButtonContainer: Story = {
  args: {},
};
