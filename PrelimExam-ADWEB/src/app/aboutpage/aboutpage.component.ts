import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent {
  showPopupMessage: boolean = false;

  showPopup() {
    this.showPopupMessage = true;
  }

  closePopup() {
    this.showPopupMessage = false;
  }
}
