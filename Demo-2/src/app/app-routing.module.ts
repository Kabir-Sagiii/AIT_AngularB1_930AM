import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { validuser } from './Auth.guard';
import { MyProductsComponent } from './components/Nested/my-products/my-products.component';
import { ElectronicsComponent } from './components/Nested/electronics/electronics.component';
import { JeweleryComponent } from './components/Nested/jewelery/jewelery.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:ProductsComponent,canActivate:[validuser]},
  {path:"productdetails/:id", component:ProductDetailsComponent},
  {path:"myproducts",component:MyProductsComponent,children:[
    {path:"",redirectTo:"electronics",pathMatch:"full"},
    {path:"electronics",component:ElectronicsComponent},
    {path:"jewelery",component:JeweleryComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
