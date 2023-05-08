import Main from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Main> = {
  title: "Components/Main",
  component: Main
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Primary: Story = {
  args: {
    title: "teste"
  }
};
