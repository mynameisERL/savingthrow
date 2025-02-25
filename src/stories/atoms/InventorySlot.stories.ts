import type { Meta, StoryObj } from "@storybook/react";

import { InventorySlot } from "./InventorySlot";

const meta = {
  title: "Example/InventorySlot",
  component: InventorySlot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InventorySlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptySlot: Story = {
    args: {
        label: "head",
    }
};

export const EquippedSlot: Story = {
    args: {
        label: "head",
        itemInfo: {title: "Big Sword", description: "it's a sword ennit", imgUrl: "sword.png"}
    }
};