import React from 'react';

import VibrantColors from './VibrantColors';
import { Images, storybookImageLabels, storybookImageOptions } from './Images';

export default {
    title: 'VibrantColors Component',
    component: VibrantColors,
    argTypes: {
        img: {
            control: {
                type: 'radio',
                labels: storybookImageLabels()
            },
            options: storybookImageOptions()
        }
    },
    args: {
        img: Images.MountainLake
    }
};

export const Primary = args => <VibrantColors {...args}/>
