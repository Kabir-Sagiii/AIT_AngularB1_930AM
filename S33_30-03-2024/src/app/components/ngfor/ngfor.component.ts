import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  // users:string[] = ["Kabir","Raj Verma","Chris","Sid Sharama","Riya Jaiswal","Aditya Reddy"]
   users:any = [{name:"Raj",city:"pune"},{name:"Sonal",city:"mumbai"},{name:"riya",city:"hyd"},{name:"aditya",city:"delhi"}]
    getFemaleUsers(){
      this.users = [{name:"Sonal",city:"mumbai"},{name:"riya",city:"hyd"}]
    }
    getMaleUsers(){
      this.users = [{name:"Raj",city:"pune"},{name:"aditya",city:"delhi"}]
    }

  }
