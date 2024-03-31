class Myclass {
 
    uname:string="Raj Verma";
    gender:string = "male";
    phn:number = 9999999999;

    display():void {
        console.log(this.uname,this.gender,this.phn)
    }

    changePhn(newNumber:number):number{
   this.phn = newNumber
   return this.phn

    }
}

       var object1  = new Myclass()

console.log(object1.uname)

object1.display()

object1.print()

console.log(object1)


