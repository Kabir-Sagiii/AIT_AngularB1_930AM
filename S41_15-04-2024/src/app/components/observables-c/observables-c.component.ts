import { Component } from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-observables-c',
  templateUrl: './observables-c.component.html',
  styleUrls: ['./observables-c.component.css']
})
export class ObservablesCComponent {
    //Create a Observable
     observable =  new Observable(function(subscriber){
                   //Store the data in the Observable
                   subscriber.next([10,20,30,40])

                   subscriber.error("Something Went Wrong")
     })
     //Above Part in Angular Application will be handled by 
     //HttpClient Module


     getData(){
        this.observable.subscribe({
          next:(data)=>{
            console.log("next",data)
          },
          error:(error)=>{
            console.log("error",error)
          },
          complete:()=>{}
        })

        //Above Part will be handled by Angular Developer.
     }

}
