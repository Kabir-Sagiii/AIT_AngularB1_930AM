var Myclass = /** @class */ (function () {
    function Myclass() {
        this.uname = "Raj Verma";
        this.gender = "male";
        this.phn = 9999999999;
    }
    Myclass.prototype.display = function () {
        console.log(this.uname, this.gender, this.phn);
    };
    Myclass.prototype.changePhn = function (newNumber) {
        this.phn = newNumber;
        return this.phn;
    };
    return Myclass;
}());
var object1 = new Myclass();
console.log(object1.uname);
object1.display();
console.log(object1);
