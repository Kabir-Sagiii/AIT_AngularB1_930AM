import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AltProductsComponent } from './components/alt-products/alt-products.component';
import { ElectronicsComponent } from './components/NestedComps/electronics/electronics.component';
import { JeweleryComponent } from './components/NestedComps/jewelery/jewelery.component';
import { MensClothingComponent } from './components/NestedComps/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './components/NestedComps/womens-clothing/womens-clothing.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AltProductsComponent,
    ElectronicsComponent,
    JeweleryComponent,
    MensClothingComponent,
    WomensClothingComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
