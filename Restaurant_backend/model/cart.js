class Cart {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name
        this.price = obj.price
        this.img_url = obj.img_url
        this.cartDate = obj.cartDate
        this.quantity = obj.quantity
    }
}

module.exports = Cart