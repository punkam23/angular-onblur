import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  myModel: any;
  username: any;
  isUserallow$ = new Observable<boolean>();
  constructor() {
    this.myModel = '123';
  }
  ngOnInit(): void {
    this.isUserallow$ = of(false);
  }
  onBlurMethod() {
    console.log('Good : ', this.myModel);
    this.isUserallow$.subscribe(res => console.log(res));
    this.username = this.myModel;
  }
}
