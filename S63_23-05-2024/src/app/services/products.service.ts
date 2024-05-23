import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:any
  constructor(private httpclient:HttpClient) { }
  getProducts(){

  //  setTimeout(()=>{
    // this.httpclient.get("https://fakestoreapi.com/products").subscribe({
    //   next:(data)=>{
    //     console.log(data)
    //     this.products = data
    //   },
    //   error:(error)=>{
    //     alert("something went while getting products info")
    //   }
    //  })
   
  //  },3000)

 
    return  this.httpclient.get("https://fakestoreapi.com/products")
  
 }
 
}
