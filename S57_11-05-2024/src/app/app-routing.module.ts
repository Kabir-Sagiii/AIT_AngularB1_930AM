import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/github/home/home.component';
import { ProfileComponent } from './components/Routing/profile/profile.component';
import { ProductsComponent } from './components/Routing/products/products.component';
import { ContactUsComponent } from './components/Routing/contact-us/contact-us.component';
import { UsersdetailsComponent } from './components/HttpClient/usersdetails/usersdetails.component';
import { PagenotfoundComponent } from './components/Routing/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  
  // {path:"",component:HomeComponent},
 
  {path:"home" ,component:HomeComponent},
  {path:"profile",component:UsersdetailsComponent},
  {path:"products",component:ProductsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"**",component:PagenotfoundComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
