import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  place = 'France';
  place1 = 'Seoul';
  place2 = 'San Francisco';
  place3 = 'Boston';

  Topic = 'Architecture and Fine Arts';
  Topic1 = 'Humanities and Arts';
  Topic2 = 'Science and Techonology';
  Topic3 = 'Engineering and Tech';

  Text = 'Cultural Events';
  Text1 = 'Safety and Security';
  Text2 = 'Learn more';
}
