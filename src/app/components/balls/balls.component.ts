import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css']
})
export class BallsComponent implements OnInit {

  defaultval: number;
  selectedval: number;
  selectedball: number;
  nbballs: number[];
  balltab: number[];
  msg: String;


  constructor() {
    this.nbballs = [1, 2, 3, 4, 5, 6, 7, 8];
    this.defaultval = 2;
    this.selectedval = 3;
  }

  ngOnInit() {
  }

  onSelected(elem) {
    this.selectedball = elem;
  }

  ballcheck() {
    this.balltab = [];
    this.nbballs.forEach(ballnb => {
      if (ballnb === this.selectedball){
        this.balltab.push(this.selectedval);
      } else {
        this.balltab.push(this.defaultval);
      }
    });
    this.msg = 'la ball ' + this.comparateur(this.balltab) + ' est la plus lourd';

    alert(this.msg);
  }

  comparateur(input) {
    console.log(input);
    let i: number;
    let c: number;
    for (i = 0, c = (this.nbballs.length - 1); i <= c; i++) {
      if (input[i] !== input[i + 1]) {
        if ((i + 1) === (this.nbballs.length - 1)) {
          return this.nbballs[i + 1];
        } else {
          if (input[i + 1] !== input[i + 2]) {
            return this.nbballs[i + 1];
          } else {
            return this.nbballs[i];
          }
        }
      }
    }
  }
}
