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
var MyCity = /** @class */ (function () {
    function MyCity() {
        this.city = "Mumbai";
    }
    MyCity.prototype.changeCity = function (newCity) {
        this.city = newCity;
        return this.city;
    };
    return MyCity;
}());
var MyUser = /** @class */ (function (_super) {
    __extends(MyUser, _super);
    function MyUser() {
        var _this = _super.call(this) || this;
        _this.username = "Raj Verma";
        return _this;
    }
    return MyUser;
}(MyCity));
var user1 = new MyUser();
console.log(user1.username);
console.log(user1.city); //reusability
user1.username = "Sneha Jaiswal";
user1.city = "Delhi";
console.log(user1.username);
console.log(user1.city);
user1.changeCity("hyderabad");
console.log(user1.city);
var MyEmployee = /** @class */ (function (_super) {
    __extends(MyEmployee, _super);
    function MyEmployee() {
        var _this = _super.call(this) || this; //Parent Class Constructor
        // It is a special keyword which is used to call Constructor of Parent 
        //Class in the Child Class
        _this.empname = "Rohan sharma";
        return _this;
    }
    return MyEmployee;
}(MyCity));
var emp1 = new MyEmployee();
console.log(emp1.city); // Mumbai or hyderbad
