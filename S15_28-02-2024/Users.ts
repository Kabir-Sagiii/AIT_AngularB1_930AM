class Users {
    username:string;
    id:number;
    static city:string;

    constructor(username:string,id:number){
   this.username = username 
   this.id = id 
   Users.city = "Hyderabad"
    }

    
    printDetailsOfUser():void{
     console.log(this.username,this.id,Users.city)
    }

    

    static changeCity(city:string):void{
        Users.city = city

    }
}

let user1 = new Users("Raj Verma",101)

let user2 = new Users("Sonal Sharma",201)

let user3 = new Users("Riya Jaiswal",999)

user1.printDetailsOfUser()


user2.printDetailsOfUser()

user3.printDetailsOfUser()

console.log("----------------------------------------------------")
// user1.changeCity("Delhi")
// user2.changeCity("Delhi")
// user3.changeCity("Delhi")

Users.changeCity("Pune")

user1.printDetailsOfUser()

user2.printDetailsOfUser()

user3.printDetailsOfUser()

Users.changeCity("Mumbai")
console.log("-------------------------------------")
user1.printDetailsOfUser()

user2.printDetailsOfUser()

user3.printDetailsOfUser()