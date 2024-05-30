import { Component,OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
interface IProduct {
  category:string,
 
  description:string,
  id:number,
  image:string,
  
  price:number,
  rating:{
    rate:number,
    count:number
  },
  title:string,
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
  
export class ProductDetailsComponent implements OnInit  {

     id:string | null = null
product:IProduct
     constructor(){
      this.product = {
        category:"",
        id:0,
        description:"",
        title:"",
        price:0,
        rating:{
          rate:0,
          count:0
        },
        image:""
       }
     }
      activatedRoute:ActivatedRoute= inject(ActivatedRoute)
      httpclient:HttpClient = inject(HttpClient)

      getProduct(){
   this.httpclient.get<IProduct>('https://fakestoreapi.com/products/'+this.id).subscribe({
    next:(data)=>{
      console.log(data)
     
       this.product = data
    },
    error:(error)=>{
      alert(
        "Error"
      )
    }
   })
      }
      
    ngOnInit(): void {
      this.id= this.activatedRoute.snapshot.paramMap.get('id')
      this.getProduct()
    }


}
