import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:'mypipe',
    pure:true
})
export class MyPipe implements PipeTransform {
    // transform(value:any,firstString:string="",secondString:string) {

    //     return value.replaceAll(firstString,secondString)
    //     //  if(reverse === 'r'){
    //     //      //Implement the code for reverse
    //     //     return value.reverse()
    //     //  }else if (reverse === ""){

    //     //     return value
    //     //  }
       
        

    // }

    transform(value: any,gender:string) {
       //logic to implement filtering based on gender
         if(gender==="all"){
          return value
         } else {
         return value.filter((element:any)=>element.gender===gender)
         }
        }
}