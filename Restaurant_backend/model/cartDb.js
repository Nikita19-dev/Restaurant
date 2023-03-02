const conn = require('../utilities/connection');
let cartDb = {}


cartDb.getCart = async (id) => {
    const CartModel = await conn.getCartCollection();
    // get product from cart
    let CartData = await CartModel.find({ id: `${id}` })
    console.log(CartData);
    if (CartData) return CartData
    else return null;
}

cartDb.addToCart = async (CartData) => {
    const CartModel = await conn.getCartCollection();
    let addedData = await CartModel.create(CartData)
    if (addedData) return addedData
    else return null
}
cartDb.updateCart = async (CartData) => {
    const CartModel = await conn.getCartCollection();
    let updateData = await CartModel.updateOne(
        {
            id: CartData.id
        },
        {
            quantity: CartData.quantity
        }
    )
    if (updateData.nModified > 0) return true
    else return null
}

cartDb.deleteCart = async (CartData) => {
    const CartModel = await conn.getCartCollection();
    let removeData = await CartModel.deleteOne(
        {
            id: CartData.id
        }
    )
    if (removeData.nModified > 0) return true
    else return null
}
cartDb.deleteFullCart = async (CartData) => {
    const CartModel = await conn.getCartCollection();
    let removedCart = await CartModel.deleteMany(
        {
            id: CartData.id
        }
    )
    if (removedCart.nModified > 0) return true
    else return null
}

module.exports = cartDb
