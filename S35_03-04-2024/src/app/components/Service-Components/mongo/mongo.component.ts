import { Component } from '@angular/core';
import { DataBService } from 'src/app/services/dataB.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css'],
  providers:[DataBService]
})
export class MongoComponent {
dataB:any
constructor(private dbService:DataBService){
    // this.dbservice= new DataBService("","")
    // this.dataB = dbService
}
     
    connectionMongo(){
      
       this.dbService.mongoDBConnection()
    }
    connectionOracle(){
     
      this.dbService.oracleDBConnection()
   }
}
