// var obj = new Object({ name: "Sagar" });
// console.log(obj);
// obj.city = "Delhi";
// console.log(obj);

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
var obj1 = new Person("s1", "male");
var obj2 = new Person("s2", "female");
console.log(obj1);
console.log(obj2);
obj1.city = "hyd";
console.log(obj1);
console.log(obj2);

// Person.prototype.state = "India";
console.log(Person.prototype);
console.log(obj1.state);
console.log(obj2.state);
