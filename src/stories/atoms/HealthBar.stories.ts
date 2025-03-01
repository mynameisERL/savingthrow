import type { Meta, StoryObj } from "@storybook/react";

import { HealthBar } from "./HeathBar";

const meta = {
  title: "Example/HealthBar",
  component: HealthBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HealthBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Health100Percent: Story = {
  args: {
    healthPercentage: 100,
    monsterHealth: 100,
    currentScore: 0,
  },
};

export const Health75Percent: Story = {
  args: {
    healthPercentage: 75,
    monsterHealth: 100,
    currentScore: 25,
  },
};

export const Health0Percent: Story = {
  args: {
    healthPercentage: 0,
    monsterHealth: 100,
    currentScore: 100,
  },
};
