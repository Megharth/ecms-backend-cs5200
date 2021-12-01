import productModel from '../models/productModel.js'

const findAllProducts = async (_req, res, _next) => {
    const products = await productModel.findAll()
    res.json({ products });
}

export default {
    findAllProducts,
}