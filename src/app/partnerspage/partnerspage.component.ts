import { Component } from '@angular/core';

@Component({
  selector: 'app-partnerspage',
  templateUrl: './partnerspage.component.html',
  styleUrls: ['./partnerspage.component.css']
})
export class PartnerspageComponent {
  company = [ 
    { company: 'Microsoft', trademark: 'Microsoft', sponsorship: 'Platinum', gotowebsite: "ViewWebsite"},   
    { company: 'Apple', trademark: 'Apple', sponsorship: 'Gold', gotowebsite: "ViewWebsite" }, 
    { company: 'Amazon', trademark: 'Amazon', sponsorship: 'Silver', gotowebsite: "ViewWebsite" }, 
    { company: 'Google', trademark: 'Google', sponsorship: 'Bronze', gotowebsite: "ViewWebsite"}, 
    ];
}
