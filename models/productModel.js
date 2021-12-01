import mongoose from 'mongoose';

import productSchema from '../schemas/products.js';

const Product = mongoose.model('product', productSchema);

const create = async (newProduct) => {
    return await new Product(newProduct).save();
}

const findAll = async () => {
    return await Product.find();
}

export default {
    create,
    findAll
};
