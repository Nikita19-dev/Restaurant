const Product = require("../model/productModel")
const productData = require("../utilities/data.json")
const asyncHandler = require("express-async-handler")

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.send(products)
})

const addProducts = asyncHandler(async (req, res) => {
    console.log(productData)
    const products = await Product.insertMany(productData)
    res.send(products)
})
module.exports = { getProducts, addProducts }