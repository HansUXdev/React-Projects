import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import StarRating from '../useState/ProductRating/ProductRating'
import ToggleBTN from '../useState/subscribeBTN/toggleBtn'

export default {
    title: 'useState',
    component: Button,
};

export const SubscribeBTN = () => (
    <ToggleBTN />
);
// // import StarRating from './useState/ProductRating/ProductRating';
export const ProductRating = () => {
    return <StarRating totalStars={5} /> 
}

// export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//         <span role="img" aria-label="so cool">
//             😀 😎 👍 💯
//         </span>
//     </Button>
// );


