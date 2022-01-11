import React from 'react';
import { Colors } from './Colors';
import { Images, storybookImageLabels, storybookImageOptions } from './Images';

export default {
    title: 'Colors Component',
    component: Colors,
    argTypes: {
        file: {
            control: {
                type: 'radio',
                labels: storybookImageLabels()
            },
            options: storybookImageOptions()
        }
    },
    args: {
        file: Images.MountainLake
    }
};

export const FullSize = args => <Colors {...args}/>
