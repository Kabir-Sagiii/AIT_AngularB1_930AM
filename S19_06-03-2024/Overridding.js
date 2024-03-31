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
var Product = /** @class */ (function () {
    function Product() {
        this.price = 100;
        this.qty = 6;
    }
    Product.prototype.totalAmount = function () {
        return this.price * this.qty; // 100 * 6
    };
    return Product;
}());
var Electronic = /** @class */ (function (_super) {
    __extends(Electronic, _super);
    function Electronic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Electronic.prototype.totalAmount = function () {
        this.totalPrice = this.price * this.qty - 200; //// 100 * 6 - 200
        return this.totalPrice;
    };
    Electronic.prototype.totalAmountParent = function () {
        console.log(this.totalAmount());
    };
    return Electronic;
}(Product));
var e1 = new Electronic();
// console.log(e1.totalAmount())
e1.totalAmountParent();
// var p1 = new Product() 
// console.log(p1.totalAmount())
