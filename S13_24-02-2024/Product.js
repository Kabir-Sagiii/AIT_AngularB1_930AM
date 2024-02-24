var Product = /** @class */ (function () {
    function Product(pname, price, id) {
        this.pName = "Samsung Galaxy";
        this.pName = pname;
        this.price = price;
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log(this.pName, this.price, this.id);
    };
    return Product;
}());
var product1 = new Product("Vivo", 40000, 1001); // Iphone  //Vivo
var product2 = new Product("oppo", 30000, 2011); // Iphone  // Oppo
var product3 = new Product("oneplus", 50000, 8989); // Iphone  //oneplus
product1.printDetails();
product2.printDetails();
product3.printDetails();
//    product1.pName = "Vivo"
//    product2.pName = "Oppo"
//    product3.pName = "Oneplus"
//    product1.printDetails()
//    product2.printDetails()
//    product3.printDetails()
