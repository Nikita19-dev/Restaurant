const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const monitor = require('nodemon/lib/monitor');
mongoose.Promise = global.Promise;

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`DB connected: ${conn.connection.host}`)
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
//         process.exit();
//     }
// }

// module.exports = connectDB;

// Product model schema
const UserSchema = Schema({
    username: { type: String, required: [true, "UserName is required"] },
    password: { type: String, required: [true, "password is required"] },
    email: { type: String, required: [true, "email is required"], unique: [true, "email id should be unique"] },
    gender: {
        type: String, enum: {
            values: [Male, Female],
            message: 'Gender can be either male or female'
        }
        // enum is used to specify set of value which feild can have 
    },
    contact: { type: Number, required: [true, " contact no is required"] },
    address: { type: String, required: [true, " adress  is required"] },
}, { collection: "User", timestamps: true }
)
const productModel = Schema({
    id: { type: Number, required: [true, "Product id is required"], unique: [true, "product id should be unique"] },
    name: { type: String, trim: true, required: [true, "Product name is required"] },

    price: { type: Number, default: 0, required: [true, "Price is required"] },
    img_url: {
        type: String, trim: true, required: [true, "image url is required"]
    },
    category: {
        type: String, trim: true, required: [true, "Category is required"]
    },
    subcategory: {
        type: String, trim: true, required: [true, "subcategory is required"]
    },
    recommended: {
        type: Boolean, default: false
    },
    rating: {
        type: Number, default: 0,
    },
    fooddesc: {
        type: String, trim: true, default: "No description"
    },
}, {
    collection: "Product", timestamps: true
})

const cartSchema = Schema({
    id: { type: Number, required: [true, "Product id is required"], unique: [true, "product id should be unique"] },
    name: { type: String, trim: true, required: [true, "Product name is required"] },

    price: { type: Number, default: 0, required: [true, "Price is required"] },
    img_url: {
        type: String, trim: true, required: [true, "image url is required"]
    },
    cartDate: { type: Date, required: [true, 'Date is required '], default: new Date() },
}, {
    collection: "Cart", timestamps: true
})

let connection = {}
connection.getUserCollection = async () => {
    // establish a connection and return model as promise 
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI);
        return conn.model("User", UserSchema)
    }
    catch (err) {
        throw new Error("Connection to UserDb  is not established")

    }
}
connection.getProductCollection = async () => {
    // establish a connection and return model as promise 
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI);
        return conn.model("Product", productModel)
    }
    catch (err) {
        throw new Error("Connection to Productdb  is not established")

    }
}

connection.getCartCollection = async () => {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI);
        return conn.model("Cart", Cart)
    }
    catch (err) {
        throw new Error("Connection to Cartdb is not established")

    }
}

module.exports = connection;