export const Images = {
  MountainLake: "/mountainlake.jpg",
  PeacockFeathers: "/peacockfeathers.jpg",
  NightUmbrella: "/nightumbrella.jpg",
  IrelandPark: "/irelandpark.jpg",
  FlowerField: "/flowerfield.jpg",
  Highway: "/highway.jpg",
  TreeBridge: "/treebridge.jpg",
  Placeholder: "/placeholder.png",
};

export const storybookImageOptions = () =>
  Object.entries(Images).map(([, image]) => image);

/**
 * This method switches the [key, val] to [val, key] as storybook requires the value to be the
 * key when creating options for the user to click on in the story
 */
export const storybookImageLabels = () =>
  Object.fromEntries(Object.entries(Images).map(([key, val]) => [val, key]));
