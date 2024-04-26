import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ObservablesCComponent } from './components/observables-c/observables-c.component';
import { MapfilterOCComponent } from './components/mapfilter-oc/mapfilter-oc.component';
import { UsersdetailsComponent } from './components/HttpClient/usersdetails/usersdetails.component';
import { NewuserComponent } from './components/HttpClient/newuser/newuser.component';
import { SearchComponent } from './components/github/search/search.component';
import { ProfileComponent } from './components/github/profile/profile.component';
import { DetailsComponent } from './components/github/details/details.component';
import { HomeComponent } from './components/github/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservablesCComponent,
    MapfilterOCComponent,
    UsersdetailsComponent,
    NewuserComponent,
    SearchComponent,
    ProfileComponent,
    DetailsComponent,
    HomeComponent,
   
   
   
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
