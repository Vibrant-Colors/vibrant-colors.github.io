import React from "react";

import { VibrantColors, VibrantColorsProps } from "./VibrantColors";
import {
  Images,
  storybookImageLabels,
  storybookImageOptions,
} from "../../../Images";

export default {
  title: "VibrantColors Component",
  component: VibrantColors,
  argTypes: {
    img: {
      control: {
        type: "radio",
        labels: storybookImageLabels(),
      },
      options: storybookImageOptions(),
    },
  },
  args: {
    img: Images.MountainLake,
  },
};

export const Primary: React.FC<VibrantColorsProps> = (args) => (
  <VibrantColors {...args} />
);
