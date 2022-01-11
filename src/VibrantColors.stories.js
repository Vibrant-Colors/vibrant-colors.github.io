import React from 'react';

import VibrantColors from './VibrantColors';
import { Images } from './Images';

export default {
    title: 'VibrantColors Component',
    component: VibrantColors,
    argTypes: {
        img: {
            control: {
                type: 'radio',
                labels: Object.fromEntries(Object.entries(Images).map(([key, val]) => [val, key]))
            },
            options: Object.entries(Images).map(([, image]) => image)
        }
    },
    args: {
        img: Images.MountainLake
    }
};

export const Primary = args => <VibrantColors {...args}/>
