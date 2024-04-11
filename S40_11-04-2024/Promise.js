// let myPromise = new Promise(function (resolve, reject) {
//   //   reject({ statusCode: 404, msg: "Something went wrong", status: false });
//   resolve([
//     { name: "Sagar", city: "Delhi" },
//     { name: "Sonal", city: "Hyd" },
//     { name: "Zoya", city: "Bhopal" },
//   ]);
// });

// console.log(myPromise);

function fetch() {
  return new Promise(function (resolve, reject) {
    //Whatever Logic we want we can right
    //Logic to fetch data from server //Ajax Code
    var status = false;
    if (status) {
      resolve({
        results: [{ name: "Sagar" }, { name: "Raj" }, { name: "Sonal" }],
        status: true,
        statusCode: 200,
      });
    } else {
      reject({ statusCoe: 404, status: false, error: "Something went wrong" });
    }
  });
}
let myPromise = fetch(); // it will return promise object with success or error data
// console.log(myPromise);
// console.log("----------------------------------------------");
//Handling the Promise Object or Consuming the Promise Object or Accesss the data from Promise Object
// myPromise
//   .then((successdata) => {
//     console.log("SuccessData", successdata);
//     //create a table
//     //add the data in the table
//     //show the table on the screen
//   })
//   .catch((errordata) => {
//     console.log("Error Data", errordata);
//     //Logic to create h2
//     //add error message in h2
//     //we will show h2 on the screen
//   });

async function handlePromise() {
  try {
    var successdata = await fetch();
    console.log("success", successdata);
  } catch (error) {
    console.log("error", error);
  }
}

handlePromise();
