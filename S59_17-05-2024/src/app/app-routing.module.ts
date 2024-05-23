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


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"productdetails/:id", component:ProductDetailsComponent},

  


  {path:"altproducts",component:AltProductsComponent,children:[
    {
      path:'electronics',component:ElectronicsComponent
    },
    {
      path:'jewelery',component:JeweleryComponent
    },
    {
      path:'mensclothing',component:MensClothingComponent
    },
    {
      path:'womensclothing',component:WomensClothingComponent
    },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
