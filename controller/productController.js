const Product = require('../model/Product')
const getProduct = async(req, res) => {
    try {
        const productResponse = await Product.find()
        res.status(200).json(productResponse)
    } catch (error) {
        console.error(error)
    }
}

const singleProduct = async(req, res) => {
    try {
        const products = await Product.findById(req.params.id)
        if(products !== null){
            res.status(200).json(products)
        }else{
            res.status(404).json({error: 'Product not Found'})
    }
    } catch (error) {
        console.error(error)
    }
}

const deleteProduct = async(req, res) => {
    try {
        const id = id.params.id
        await Product.findByIdAndDelete(id)
        res.status(200).json({info: `Product with ${id} has been successfully deleted`})
    } catch (error) {
        res.status(500).json(error)
    }
}

const createProduct = async(req, res) => {
    const {Mobile, Version, Model, Price, Year} = req.body
    console.log(req.body)
    if(!Mobile || !Version || !Model || !Price || !Year){
        res.status(500).json({info: 'Please provide Products full information '})
    res.end()
    }
    try {
    const products = await Product.create({
        Mobile, Version, Model, Price, Year
    })
    res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteManyProduct = async(req, res) => {
    const query = req.body.d
    if(query){
        try {
            await Product.deleteMany({itemName: query})
            res.status(200).json({info: `Product with name ${query} deleted successfully!`})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = {getProduct, singleProduct, deleteProduct, createProduct, deleteManyProduct}