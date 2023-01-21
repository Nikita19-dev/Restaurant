const mongoose = require('mongoose');
const monitor = require('nodemon/lib/monitor');
const productModel = mongoose.Schema({
    id: { type: Number },
    name: { type: String, trim: true },
    price: { type: Number, default: 0 },
    img_url: {
        type: String, trim: true
    },
    category: {
        type: String, trim: true
    },
    subcategory: {
        type: String, trim: true
    },
    recommended: {
        type: Boolean, default: false
    },
    rating: {
        type: Number, default: 0
    },
    fooddesc: {
        type: String, trim: true, default: "No description"
    }

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productModel);
module.exports = Product;