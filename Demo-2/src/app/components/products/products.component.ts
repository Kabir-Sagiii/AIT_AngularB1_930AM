import { Component,OnInit,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
     httpclient:HttpClient=inject(HttpClient)

  products:any = []

 getProducts(){
   this.httpclient.get("https://fakestoreapi.com/products").subscribe({
    next:(data)=>{
      console.log(data)
      this.products = data
    },
    error:(error)=>{
      alert("something went while getting products info")
    }
   })
}

sortProducts(sort:any){
  this.httpclient.get("https://fakestoreapi.com/products?"+"sort"+"="+sort.value).subscribe({
    next:(data)=>{
      console.log(data)
      this.products = data
    },
    error:(error)=>{
      alert("something went while getting products info")
    }
   })
}

ngOnInit(): void {
     this.getProducts() 
}

}
