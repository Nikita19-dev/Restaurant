const fs = require("fs")
let conn = require("../utilities/connection");
let userDb = {};
let bcrypt = require("bcrypt")
userDb.setupDB = async () => {
    fs.readFile(__dirname + '/users.json', (err, data) => {
        if (err) console.log(err)
        else jsonData = JSON.parse(data)
    });
    const userModel = await conn.getUserCollection();
    //  to remove all products from DB
    let removeData = await userModel.deleteMany({});
    let userDataAdded = await userModel.insertMany({})
    if (userDataAdded) return userDataAdded.length
    else return null
}
userDb.addUser = async (userdata) => {
    let userModel = await conn.getUserCollection();
    let addUser = await userModel.create(userdata)
    if (addUser) {
        return addUser
    }
    else {
        return null
    }

}
userDb.loginUser = async (userdata) => {
    let userModel = await conn.getUserCollection();
    let loggedUser = await userModel.findOne({ email: userdata.email })
    if (loggedUser) {
        if (bcrypt.compareSync(userdata.password, loggedUser.password,)) {
            return loggedUser
        }
        else {
            return null;
        }
    }
}
module.exports = userDb