class Product {

   public pId:number
   protected pName:string 
    pPrice:number
   private qty:number;

   constructor(){
    this.pId = 101
    this.pName = "Product 1"
    this.pPrice = 8000 
    this.qty = 20
   }

   protected changeName(){
    this.pName = "Product 2"
   }

    display():void{
   console.log(this.pId,this.pName,this.pPrice,this.qty)
    }

   private totalAmount():number{
        this.changeName()
        this.display()
      return this.pPrice * this.qty
    }
}

  class Electronics extends Product{
     print(){
        console.log(this.pId)
      //  this.qty = 100  cannot access
      //this.totalAmount() cannot access

       this.pName = "Product Child"
       this.changeName()
       
     }
  }

     var p1 = new Product()
     console.log(p1.pId)
    //  p1.qty = 50 cannot access
    //  p1.totalAmount()cannot access

     p1.pId = 201

     console.log(p1.pId)

    //  p1.changeName() cannot access 