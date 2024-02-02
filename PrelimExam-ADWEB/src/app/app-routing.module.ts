import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { JoinuspageComponent } from './joinuspage/joinuspage.component';
import { HomeComponent } from './home/home.component';
import { PartnerpageComponent } from './partnerpage/partnerpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'aboutpage',
    component: AboutpageComponent
  },
  { path: 'joinuspage',
    component: JoinuspageComponent
  },
  { path: 'home',
  component: HomeComponent
  },
  { path: 'partnerspage',
  component: PartnerpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
