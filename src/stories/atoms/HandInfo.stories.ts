import type { Meta, StoryObj } from "@storybook/react";

import { HandInfo } from "./HandInfo";

const meta = {
  title: "Example/HandInfo",
  component: HandInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HandInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pair: Story = {
    args: {
        handName: "pair",
        scoreTuple: [20, 4]
    }
};

export const FiveOfAKind: Story = {
    args: {
        handName: "Five of a kind",
        scoreTuple: [75, 5]
    }
};

export const LargeStraight: Story = {
    args: {
        handName: "Large Straight",
        scoreTuple: [60, 5]
    }
};

export const FullHouse: Story = {
    args: {
        handName: "Full House",
        scoreTuple: [40, 4]
    }
};

export const ThreeOfAKind: Story = {
    args: {
        handName: "Three of a kind",
        scoreTuple: [30, 3]
    }
};