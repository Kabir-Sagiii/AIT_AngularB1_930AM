import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent {
      username:string = "Sonal Sharma"
      label:string="Check to get New Data"
     city:string = "Pune"
     width:number = 300
     height:number = 300
     className:string="card"
     imageUrl:string = "https://assets.gqindia.com/photos/5f9039547f0af5175e0fafbe/master/w_1280%2Cc_limit/Indian%252520women%252520businesswomen%252520Vinati%252520Saraf%252520Mutreja.jpg"

     changeInfo(event:any):void {
      if(event.target.checked){
        this.city = "Banglore"
        this.username = "Raj Verma"
        this.imageUrl = "https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg"
      
        this.className = "newcard"
        this.label = "Uncheck to get Previous Data"
      }else {
        this.username = "Sonal Sharma"
     this.city= "Pune"
  
     this.className="card"
     this.label = "Check to get New Data"
     this.imageUrl = "https://assets.gqindia.com/photos/5f9039547f0af5175e0fafbe/master/w_1280%2Cc_limit/Indian%252520women%252520businesswomen%252520Vinati%252520Saraf%252520Mutreja.jpg"
      }
      
       
     }
     

}
