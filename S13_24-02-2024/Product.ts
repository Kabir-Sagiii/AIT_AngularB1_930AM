class Product {

   pName:string = "Samsung Galaxy";
   price:number ;
   id:number ;

   

   constructor(pname:string,price:number,id:number){
      this.pName = pname
      this.price = price
      this.id=id
   }
  
   
     printDetails():void{
        console.log(this.pName,this.price,this.id)
     }

}

       var product1= new Product("Vivo",40000,1001); // Iphone  //Vivo
         

       var product2= new Product("oppo",30000,2011); // Iphone  // Oppo
       

       var product3= new Product("oneplus",50000,8989); // Iphone  //oneplus
      

       product1.printDetails() //this


       product2.printDetails() //this

       product3.printDetails() //this

    //    product1.pName = "Vivo"
    //    product2.pName = "Oppo"
    //    product3.pName = "Oneplus"

    //    product1.printDetails()
    //    product2.printDetails()
    //    product3.printDetails()
