import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservablesCComponent } from './components/observables-c/observables-c.component';
import { MapfilterOCComponent } from './components/mapfilter-oc/mapfilter-oc.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservablesCComponent,
    MapfilterOCComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [MyService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
