class Product {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name
        this.price = obj.price
        this.img_url = obj.img_url
        this.category = obj.category
        this.subcategory = obj.subcategory
        this.recommended = obj.recommended
        this.rating = obj.rating
        this.fooddesc = obj.fooddesc
    }
}

module.exports = Cart