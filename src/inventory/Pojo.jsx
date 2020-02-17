export default class Product {

    constructor(name, prx, cata, img) {
        this.prodName = name;
        this.price = prx
        this.cat = cata
        this.image = img
    }
     toString() {
        return  JSON.stringify(this)
    }
}