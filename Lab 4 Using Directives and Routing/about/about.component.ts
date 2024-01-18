import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position="Student"
  email="stdatu4@student.hau.edu.ph"
  phone= "09959727587 send gcash sir"
  age="21"
  gender="Male"
  education="Bachelor's of Science in Information Tecnology Major in Web Development"

  imageUrl:string="assets/sean.jpg";
  imageW: number = 400;
  imageH: number = 400;
}
