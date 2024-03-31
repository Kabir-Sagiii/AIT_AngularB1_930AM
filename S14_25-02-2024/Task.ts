class MyCity{
    city:string;
    constructor(){
        this.city = "Mumbai"
    }

    changeCity(newCity:string):string{
        this.city = newCity
            return this.city
        }
}

class MyUser extends MyCity {
    username:string;
   

    constructor(){
        super()
        this.username = "Raj Verma"
       
    }


    
}

      var user1 = new MyUser()

      console.log(user1.username)
      console.log(user1.city) //reusability

      user1.username = "Sneha Jaiswal"

      user1.city = "Delhi"

      console.log(user1.username)
      console.log(user1.city)


      user1.changeCity("hyderabad")
      console.log(user1.city)













class MyEmployee extends MyCity{
    empname:string;
    

    constructor(){
        super() //Parent Class Constructor
       // It is a special keyword which is used to call Constructor of Parent 
                //Class in the Child Class
        this.empname = "Rohan sharma"
       
       
    }

    
}


   var emp1 = new MyEmployee()

   console.log(emp1.city) // Mumbai or hyderbad