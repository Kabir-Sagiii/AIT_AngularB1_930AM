class Products {
    pName:string = "vdvdfv" ;
      id:number = 101
       
      static price:number = 300
      static qty:number = 5
      static totalAmount:number

      display(){
        console.log(this.id,this.pName,Products.price,Products.qty,Products.totalAmount)
      }

   static printTotalAmount():void{
    Products.totalAmount = this.price * this.qty
    console.log(this.totalAmount)
    // this.pName : In valid
   }

}

class Electronics extends Products {
       rating:number = 4.5

       print(){
        // console.log("Electronics",Electronics.price)
        // console.log("Products",Products.price)

        console.log("Electronics-qty",Electronics.qty)
        console.log("Products-qty",Products.qty)

       }
}

var electronic = new Electronics()
// var product = new Products()






// console.log(product)
// console.log(electronic)


electronic.print()
 console.log("----------------------------------")

Electronics.qty = 100
Products.qty = 500

electronic.print()
console.log("-----------------------")

console.log(Electronics.qty,Products.qty) // 


// electronic.qty = 100 : Invalid 

// electronic.print()