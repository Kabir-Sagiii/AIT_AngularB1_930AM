
  export class MyService{
    city:string = "Hyderabad"

       printCityName():void{
        alert(this.city)
       }

       changeCity(cityName:string){  //cityName = "pune"
  this.city = cityName
       }
       //this.city = "pune"
  }