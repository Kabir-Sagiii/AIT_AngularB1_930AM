import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DBService {
 name:string =''
  // constructor() { }

  constructor(name:string){
    this.name = name
  }

    f1(){
      //Logic to connect with DB
      //Logic to access data from DB
      //Logic to perform some action  : 100 lines of code

      alert("f1 is called")
    }
}
