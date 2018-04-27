import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { BallsComponent } from './components/balls/balls.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(){
  }

  ngAfterViewInit() {
  }
}
