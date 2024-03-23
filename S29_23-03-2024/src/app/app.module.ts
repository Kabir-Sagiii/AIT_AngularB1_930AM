import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { TextInterpolationComponent } from './components/text-interpolation/text-interpolation.component';
import { EventbindingComponent } from './components/main/eventbinding/eventbinding.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { DirectiveTaskComponent } from './components/directive-task/directive-task.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProfileComponent,
    PortfolioComponent,
    Section1Component,
    Section2Component,
    TextInterpolationComponent,
    EventbindingComponent,
    TwowayComponent,
    NgforComponent,
    DirectiveTaskComponent,
    NgswitchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
