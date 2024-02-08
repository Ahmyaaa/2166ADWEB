import { Component } from '@angular/core';
import { Observable,map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipe Midterm';
  time$: Observable<Date>;

  name = "Sean Warner Dean T. Datu";

  a: number = 11;
  b: number = 13;

  euler: number = 2.71828;

  presentDate = new Date(); 

  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date ()))
  }

  data: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  str: string = 'cutenikenj';
}
