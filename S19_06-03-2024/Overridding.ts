class Product{
    price:number;
    qty:number 

    constructor(){
        this.price = 100
        this.qty = 6
    }

    totalAmount():number {
        return this.price * this.qty  // 100 * 6
    }
}

class Electronic extends Product {
    totalPrice:number;
    totalAmount(): number {
     this.totalPrice = this.price * this.qty - 200 //// 100 * 6 - 200
        return this.totalPrice 
        
    }
       totalAmountParent(){
        console.log(super.totalAmount())
       }
}


    var e1 = new Electronic()
    // console.log(e1.totalAmount())

    e1.totalAmountParent()


    // var p1 = new Product() 
    // console.log(p1.totalAmount())