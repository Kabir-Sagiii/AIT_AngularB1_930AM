import { Component } from '@angular/core';
import {Observable,map,from,filter} from 'rxjs'

@Component({
  selector: 'app-mapfilter-oc',
  templateUrl: './mapfilter-oc.component.html',
  styleUrls: ['./mapfilter-oc.component.css']
})
export class MapfilterOCComponent {
    observable = from([100,200,300,400,500])

    modifiedObservable= this.observable.pipe(filter((data:any)=>{
      
      return data > 300
}))

    // modifiedObservable= this.observable.pipe(map((data:any)=>{
      
    //         return data * 10
    // }))

     getObservableData(){
      this.modifiedObservable.subscribe({
        next:(data)=>{
           console.log(data)
        }
      })
     }
    
}
