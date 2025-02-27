import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";

const meta = {
  title: "Example/SideBar",
  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AttackButton: Story = {
  args: {
   
  },
};
