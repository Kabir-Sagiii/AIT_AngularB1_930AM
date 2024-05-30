import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AltProductsComponent } from './components/alt-products/alt-products.component';
import { ElectronicsComponent } from './components/NestedComps/electronics/electronics.component';
import { JeweleryComponent } from './components/NestedComps/jewelery/jewelery.component';
import { MensClothingComponent } from './components/NestedComps/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './components/NestedComps/womens-clothing/womens-clothing.component';
import { LoginComponent } from './components/login/login.component';
import { activateRoute,activateChildRoutes,activateChildByDefault,deactivateRoute } from './Guard/ActivateRoute';
import { ContactusComponent } from './components/contactus/contactus.component';


const routes: Routes = [
  {path:"",component:HomeComponent},

  {path:"products",component:ProductsComponent,canActivate:[activateRoute]},
  {path:"contactus",component:ContactusComponent,canDeactivate:[deactivateRoute]},

  {path:"productdetails/:id", component:ProductDetailsComponent,canActivate:[activateRoute]},
  {path:"login",component:LoginComponent},
  


  {path:"altproducts",component:AltProductsComponent,canActivateChild:[activateChildByDefault] ,children:[
    {path:"",redirectTo:"jewelery",pathMatch:"full"},
    {
      path:'electronics',component:ElectronicsComponent,
    },
    {
      path:'jewelery',component:JeweleryComponent,canActivate:[activateChildByDefault]
    },
    {
      path:'mensclothing',component:MensClothingComponent,
    },
    {
      path:'womensclothing',component:WomensClothingComponent,
    },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
