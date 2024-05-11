import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Interceptor/login/login.component';
import { HomeComponent } from './components/github/home/home.component';
import { UsersdetailsComponent } from './components/HttpClient/usersdetails/usersdetails.component';
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
