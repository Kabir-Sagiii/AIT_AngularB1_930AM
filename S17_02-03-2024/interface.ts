
interface IUser {
     username:string,
     city:string,
     isMarried:boolean,
     phone:number
     email?:string
}

var user2 = {
    city:"Hyderabad"
}

var user1:IUser = {
    username:"Rohan Sharma",
    city:"Delhi",
    isMarried:false,
    phone:99999999,
   
}

function getUserName(user:IUser){

    return `Hello ${user.username}`
}

getUserName({username:"Rohan",city:"Delhi",isMarried:true,phone:999999})