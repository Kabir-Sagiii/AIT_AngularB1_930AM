import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservablesCComponent } from './components/observables-c/observables-c.component';
import { MapfilterOCComponent } from './components/mapfilter-oc/mapfilter-oc.component';
import { UsersdetailsComponent } from './components/HttpClient/usersdetails/usersdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservablesCComponent,
    MapfilterOCComponent,
    UsersdetailsComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [MyService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
