interface IAdress {
    city:string,
    state:string,
    pincode:number
}
interface IUser{
    uname:string,
    address:IAdress
}
// interface IUser {
//     uname:string,
//     address :{
//         city:string,
//         state:string,
//         pincode:number
//     }
// }

let users:IUser = {
    uname:"",
    address:{
        city:"",
        state:"",
        pincode:99,
        
    }
}