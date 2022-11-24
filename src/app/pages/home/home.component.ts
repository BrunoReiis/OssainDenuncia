import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <img class ="imgBack" src="../../../assets/Background.png">
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
