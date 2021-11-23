import mongoose from 'mongoose';

const { Schema } = mongoose;

import review from './reviews';
import seller from './seller';

const product = new Schema({
    name: String,
    description: String,
    price: Number,
    category: {
        type: String,
        enum: ['CLOTHES', 'ELECTRONICS', 'HOME_ESSENTIALS', 'HEALTH_AND_WELLNESS', 'CHILDREN', 'OTHERS']
    },
    image: String,
    quantity: Number,
    reviews: [review],
    sellers: [seller],
});

export default product;