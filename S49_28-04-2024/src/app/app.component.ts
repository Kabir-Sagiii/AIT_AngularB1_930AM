import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
  title = 'My first title in App Component';
  constructor(private httpclient:HttpClient){

  }
 

    getProducts(){
      
     this.httpclient.get("http://localhost:2929/products/allproducts"
    ).subscribe({
      next:(products)=>{
        console.log(products)
      },
      error : ()=>{
        alert("error Products")
      }
     })
    }

    addProducts(){
     
     this.httpclient.post("http://localhost:2929/products/allproducts",{}
    ).subscribe({
      next:(products)=>{
        console.log(products)
      },
      error : ()=>{
        alert("error Products")
      }
     })
    }
}
