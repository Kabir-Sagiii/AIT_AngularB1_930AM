import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusSService {

submitted:boolean = false 
username:string=""
email:string=""
query:string = ""

  constructor() { }
}
