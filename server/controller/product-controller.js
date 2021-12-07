import Product from '../model/productSchema.js'

export const getProducts = async (req, res) => {
    try {
        const Products = await Product.find({})
        res.json(Products)
    } catch(error) {
        console.log('Error: ', error.message)
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({'id': req.params.id})
        return res.json(product)
    } catch(error) {
        console.log('Error: ', error.message)
    }
}