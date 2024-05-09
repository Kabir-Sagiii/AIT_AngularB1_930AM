var A = /** @class */ (function () {
    function A() {
        this.id = 1001;
    }
    Object.defineProperty(A.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "idV", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
var a1 = new A();
var idvalue = a1.getId;
console.log(idvalue);
a1.idV = 1;
idvalue = a1.getId;
console.log(idvalue);
