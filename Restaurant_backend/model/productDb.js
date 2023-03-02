const conn = require('../utilities/connection');
let productDb = {}

// get all products
productDb.getAllProducts = async () => {
    const productModel = await conn.getProductCollection();
    // get product from dB
    let productList = await productModel.find()
    console.log(productList);
    if (productList) return productList
    else return null;
}

// get product by product id
productDb.getAllProducts = async (id) => {
    const productModel = await conn.getProductCollection();
    // get product from dB
    let productData = await productModel.find({ id: Number(id) })
    console.log(productList);
    if (productData.length > 0) return productData
    else return null;
}

