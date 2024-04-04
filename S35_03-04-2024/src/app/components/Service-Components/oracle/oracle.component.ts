import { Component } from '@angular/core';
import { DataBService } from 'src/app/services/dataB.service';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.css'],
  providers:[DBService]
})
export class OracleComponent {
 dbservice:any
 constructor(dbservice:DBService){
  // this.dbservice= new DataBService("","")
 }
 
  connectionMongo(){
    
    this.dbservice.mongoDBConnection()
 }
 connectionOracle(){
  
   this.dbservice.oracleDBConnection()
}

}
