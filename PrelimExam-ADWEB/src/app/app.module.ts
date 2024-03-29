import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PartnerpageComponent } from './partnerpage/partnerpage.component';
import { JoinuspageComponent } from './joinuspage/joinuspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutpageComponent,
    PartnerpageComponent,
    JoinuspageComponent
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
