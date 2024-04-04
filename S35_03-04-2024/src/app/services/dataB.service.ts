import {Injectable,Inject} from '@angular/core'

@Injectable()
export class DataBService{
  // name:string;


 

      oracleDBConnection(){
        // Logic to connect with DB 100 lines
        alert("Connected to Oracle")
      }

      mongoDBConnection(){
        // Logic to connect with DB 100lines
        alert("Connected to Mongo")

      }
}