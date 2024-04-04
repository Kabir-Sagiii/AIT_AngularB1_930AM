import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MainComponent} from "./Services-Concept/main/main.component"
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
import { ParentComponent } from './Parent-Child/parent/parent.component';
import { ChildComponent } from './Parent-Child/child/child.component';
import { UserListComponent } from './Parent-Child/user-list/user-list.component';
import { UserComponent } from './Parent-Child/user/user.component';
import { ParentCComponent } from './Child-Parent/parent-c/parent-c.component';
import { ChildCComponent } from './Child-Parent/child-c/child-c.component';
import { FilterUsersComponent } from './Parent-Child/filter-users/filter-users.component';
import { AComponent } from './Services-Concept/a/a.component';
import { BComponent } from './Services-Concept/b/b.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
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
    ParentComponent,
    ChildComponent,
    UserListComponent,
    UserComponent,
    ParentCComponent,
    ChildCComponent,
    FilterUsersComponent,
    MainComponent,
    AComponent,
    BComponent,
   
   
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
