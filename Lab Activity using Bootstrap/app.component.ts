import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapActivity';

  clickCount=0
  clickMe(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }
}
