import { Component } from '@angular/core';
import {Observable,from,of} from 'rxjs'

@Component({
  selector: 'app-observables-c',
  templateUrl: './observables-c.component.html',
  styleUrls: ['./observables-c.component.css']
})
export class ObservablesCComponent {

    usersId:any = []
// create a Observable with from and of
                   observable =from([10,20,30,40])
                  //  observable =of([10,20,30,40])
    //Create a Observable
    //  observable =  new Observable(function(subscriber){
    //                //Store the data in the Observable
    //               //  subscriber.next([10,20,30,40])
    //                 if(true){
    //                   subscriber.next(10)
                    
    //                   subscriber.next(20)
                    
    //                   subscriber.next(30)
                     
                    
    //                   subscriber.complete()
    //                 }else{
    //                   subscriber.error("Something Went Wrong")
    //                 }
                   

                 
    //  })
     //Above Part in Angular Application will be handled by 
     //HttpClient Module


     getData(){
        this.observable.subscribe({
          next:(data)=>{
            // // this.usersId = data
            //   this.usersId.push(data)
            console.log("next",data)
          },
          error:(error)=>{
            console.log("error",error)
          },
          complete:()=>{
            console.log("Completed")
          }
        })

        //Above Part will be handled by Angular Developer.
     }

}
