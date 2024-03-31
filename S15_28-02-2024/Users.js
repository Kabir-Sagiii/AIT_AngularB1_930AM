var Users = /** @class */ (function () {
    function Users(username, id) {
        this.username = username;
        this.id = id;
        Users.city = "Hyderabad";
    }
    Users.prototype.printDetailsOfUser = function () {
        console.log(this.username, this.id, Users.city);
    };
    Users.changeCity = function (city) {
        Users.city = city;
    };
    return Users;
}());
var user1 = new Users("Raj Verma", 101);
var user2 = new Users("Sonal Sharma", 201);
var user3 = new Users("Riya Jaiswal", 999);
user1.printDetailsOfUser();
user2.printDetailsOfUser();
user3.printDetailsOfUser();
console.log("----------------------------------------------------");
// user1.changeCity("Delhi")
// user2.changeCity("Delhi")
// user3.changeCity("Delhi")
Users.changeCity("Pune");
user1.printDetailsOfUser();
user2.printDetailsOfUser();
user3.printDetailsOfUser();
Users.changeCity("Mumbai");
console.log("-------------------------------------");
user1.printDetailsOfUser();
user2.printDetailsOfUser();
user3.printDetailsOfUser();
