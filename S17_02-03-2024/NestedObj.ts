
// interface IInfo {
//     empname:string,
//     address:{
//         city:string,
//         state:string,
//         pincode:number
//     }
// }




// var info:IInfo = {
//     empname:"Sonal Jaiswal",
//     address:{
//         city:"Bhopal",
//         state:"MP",
//         pincode:898989
//     }
// }

interface IAddress {
    city:string,
    state:string,
    pincode:number
}

interface  IInfo {
  empname:string,
  address:IAddress
}

   var info:IInfo = {
    empname:"",
    address:{
        city:"",
        state:"",
        pincode:9999
    }
   }