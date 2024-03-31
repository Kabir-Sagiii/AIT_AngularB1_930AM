import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent {

     users:any = []
     AllUsers:any = []
     showUI:boolean = false
     disableButton:boolean = false

     getRandomUsers():void{ 
     var res= fetch("https://randomuser.me/api/?results=30")
         res.then((binarydata)=>{
          return binarydata.json()
         }).then((data)=>{
          // console.log(data.results)
          this.users = data.results
          this.AllUsers = data.results
          this.showUI = true
          this.disableButton = true
         })
         .catch((error)=>{alert("error while getting the data")
          console.log(error)
        })

     }

     filterUsers(gender:string):void {
       if(gender==="all") {
        this.users = this.AllUsers
       } else {
        this.users  = this.AllUsers.filter((element:any)=>element.gender===gender)
       }
     }

    
        
}
