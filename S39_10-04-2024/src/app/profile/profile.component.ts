import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // bgColor:string="white"
  // textColor:string = "black"
  // darkTheme:boolean = false
  // lightTheme:boolean = true
  showDarkTheme:boolean = false
  themeTitle:string = "Switch On for Dark Theme "

  // changeTheme(theme:string):void {
  //   if(theme==="dark"){
  //     this.bgColor = "black"
  //     this.textColor = "white"
  //   }else {
  //     this.bgColor = "white"
  //     this.textColor = "black"
  //   }
  // }
  // changeTheme(event:any){
  // //  alert(event.target.checked)
  //   if(event.target.checked){
  //     this.bgColor = "black"
  //     this.textColor = "white"
  //     this.themeTitle = "Switch Off for Light Theme"
  //   }else {
  //     this.bgColor = "white"
  //     this.textColor = "black"
  //     this.themeTitle = "Switch On for Dark Theme"
  //   }
  // }
  changeTheme(event:any){
  
    if(event.target.checked){
      // this.darkTheme=true
      // this.lightTheme=false
      this.showDarkTheme = true
      this.themeTitle = "Switch Off for Light Theme"
    }else {
      // this.darkTheme=false
      // this.lightTheme=true
      this.showDarkTheme = false
      this.themeTitle = "Switch On for Dark Theme"
    }
  }
}
