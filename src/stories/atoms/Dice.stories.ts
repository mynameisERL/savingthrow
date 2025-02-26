import type { Meta, StoryObj } from "@storybook/react";

import { Dice } from "./Dice";

const meta = {
  title: "Example/Dice",
  component: Dice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {
  args: {
    number: 1,
  },
};

export const Three: Story = {
  args: {
    number: 3,
  },
};

export const Six: Story = {
  args: {
    number: 6,
  },
};
