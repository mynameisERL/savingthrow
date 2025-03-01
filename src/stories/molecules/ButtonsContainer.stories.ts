import type { Meta, StoryObj } from "@storybook/react";

import { ButtonsContainer } from "./ButtonsContainer";
import Game from "../../Classes/Game";

const meta = {
  title: "Example/ButtonsContainer",
  component: ButtonsContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonContainer: Story = {
  args: {
    game: new Game(),
  },
};
