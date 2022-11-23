import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="lastFooter">
        <p>Feito com ❤️ por Bulbasaur Group</p>
        <img src="../../assets/bulbassaurGroup.png">
  </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
