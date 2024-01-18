import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//Using ngIf to toggle text display
staff = [ 
  { product: 'MINECRAFT', price: '₱1,673.64' },   
  { product: 'MINECRAFT DUNGEONS - HERO EDITION', price: '₱1,673.64'}, 
  { product: 'MINECRAFT - STORY MODE', price: '₱6,138.15'}, 
  { product: 'CUPHEAD', price: '₱1,115.57' }, 
  { product: 'P5S - PERSONA5 STRIKERS', price: '₱3,347.83' }, 
  { product: 'P5R - PERSONA5 ROYAL', price: '₱3,347.83'} ,
  { product: 'P5T - PERSONA 5 TACTICA', price: '₱3,347.83' } ,
  { product: 'HADES', price: '₱1,394.60'} 
  ];
  showText: boolean = false; 
  toggleText() {
    this.showText = !this.showText;
  }
}
