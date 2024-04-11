import { Component } from '@angular/core';

@Component({
  selector: 'app-pipesconcept',
  templateUrl: './pipesconcept.component.html',
  styleUrls: ['./pipesconcept.component.css']
})
export class PipesconceptComponent {

    // users:string[] = ["raj","rohan","swami","prasad"]
    users:any = [{name:"ram",gender:"male"},{name:"sita",gender:"female"},{name:"hanuman",gender:"male"}]

    productsPrice:number[] = [345,789,654,1234]

    usersDob:any = [new Date('5,13,1996'),new Date('4,21,1992'),new Date('8,31,1998')]
}
