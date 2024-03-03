

abstract class Product{

    abstract changeTitle(title:string):void

    abstract changePrice():void

    display(){
        console.log("Implemented Methods")
    }
}

class Electronic extends Product{
    title:string = "Iphone"
      changeTitle(title: string): void {
           this.title = title
      }
      changePrice(): void {
          
      }
}

class Jewelery extends Product{
    title:string
    changeTitle(title: string): void {
        this.title = title
    }
    changePrice(): void {
        
    }
}

  let p1 = new Electronic()