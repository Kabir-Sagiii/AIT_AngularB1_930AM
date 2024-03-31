var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products() {
        this.pName = "vdvdfv";
        this.id = 101;
    }
    Products.prototype.display = function () {
        console.log(this.id, this.pName, Products.price, Products.qty, Products.totalAmount);
    };
    Products.printTotalAmount = function () {
        Products.totalAmount = this.price * this.qty;
        console.log(this.totalAmount);
        // this.pName : In valid
    };
    Products.price = 300;
    Products.qty = 5;
    return Products;
}());
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rating = 4.5;
        return _this;
    }
    Electronics.prototype.print = function () {
        // console.log("Electronics",Electronics.price)
        // console.log("Products",Products.price)
        console.log("Electronics-qty", Electronics.qty);
        console.log("Products-qty", Products.qty);
    };
    return Electronics;
}(Products));
var electronic = new Electronics();
// var product = new Products()
// console.log(product)
// console.log(electronic)
electronic.print();
console.log("----------------------------------");
Electronics.qty = 100;
Products.qty = 500;
electronic.print();
console.log("-----------------------");
console.log(Electronics.qty, Products.qty); // 
// electronic.qty = 100 : Invalid 
// electronic.print()
