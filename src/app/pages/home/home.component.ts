import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="main">
    <div class="fundoMonkey">
      <img class="monkey" src="../../../assets/Monkey.jpg">
    </div>
    <div class="text">
      <h2>About the <span>Website</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia felis vitae hendrerit ultricies. 
        Vivamus aliquet enim libero, non rhoncus mi luctus ac. Pellentesque dignissim, risus in vestibulum pharetra, lorem 
        orci suscipit ipsum, ac accumsan neque neque pretium augue. Donec et velit molestie felis sollicitudin maximus. Ut 
        blandit lectus scelerisque diam maximus facilisis. Nam porttitor orci non fringilla maximus. Maecenas iaculis quam nec 
        diam consequat, in molestie enim aliquam. Suspendisse molestie auctor sagittis. Vestibulum in scelerisque urna, et bibendum 
        massa. Morbi imperdiet elit accumsan lacus consequat, egestas tempus leo porttitor. Donec lacinia ultricies nisi, eu 
        aliquet risus scelerisque eget.</p>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
