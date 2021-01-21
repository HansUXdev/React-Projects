import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import StarRating from '../useState/ProductRating/ProductRating'
import ToggleBTN from '../useState/subscribeBTN/toggleBtn'

export default {
    title: 'SubscribedBTN',
    component: ToggleBTN,
};

export const UnsubscribedBTN = () => (
    <ToggleBTN />
);

export const SubscribedBTN = () => (
    <ToggleBTN />
);




