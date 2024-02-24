var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

function add(x, y) {
  var result = x + y + this.c; //window.c = undefined
  console.log(result);
}

// add(10, 10); // 10 + 10 + 100

// add(10, 10); // 10 + 10 + 500

add.call(obj1, 10, 10); //100 + 10 + 10 = 120

add.call(obj2, 20, 20); //500 + 20 +20 = 540
