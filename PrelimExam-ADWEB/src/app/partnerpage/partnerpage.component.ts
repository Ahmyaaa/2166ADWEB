import { Component } from '@angular/core';

@Component({
  selector: 'app-partnerpage',
  templateUrl: './partnerpage.component.html',
  styleUrls: ['./partnerpage.component.css']
})
export class PartnerpageComponent {
  company = [ 
    { company: 'Microsoft', trademark: 'https://cdn-icons-png.flaticon.com/512/732/732221.png', sponsorship: 'Platinum', gotowebsite: "https://www.microsoft.com"},   
    { company: 'Apple', trademark: 'https://cdn-icons-png.flaticon.com/512/0/747.png', sponsorship: 'Gold', gotowebsite: "https://www.apple.com" }, 
    { company: 'Amazon', trademark: 'https://cdn-icons-png.flaticon.com/512/11376/11376302.png', sponsorship: 'Silver', gotowebsite: "https://www.amazon.com" }, 
    { company: 'Google', trademark: 'https://cdn-icons-png.flaticon.com/512/2504/2504739.png', sponsorship: 'Bronze', gotowebsite: "https://www.google.com"}, 
    ];
}
