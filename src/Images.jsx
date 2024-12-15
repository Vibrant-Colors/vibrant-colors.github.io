export const Images = {
    MountainLake: '/mountainlake.jpg',
    PeacockFeathers: '/peacockfeathers.jpg',
    NightUmbrella: '/nightumbrella.jpg',
    IrelandPark: '/irelandpark.jpg',
    FlowerField: '/flowerfield.jpg',
    Highway: '/highway.jpg',
    TreeBridge: '/treebridge.jpg',
    Placeholder: '/placeholder.png'
}

export const storybookImageOptions = () => Object.entries(Images).map(([, image]) => image);

export const storybookImageLabels = () => Object.fromEntries(Object.entries(Images).map(([key, val]) => [val, key]));
