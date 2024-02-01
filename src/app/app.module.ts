import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerspageComponent } from './partnerspage/partnerspage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { JoinuspageComponent } from './joinuspage/joinuspage.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnerspageComponent,
    AboutpageComponent,
    JoinuspageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
