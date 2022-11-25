import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <!-- Navbar -->
  <div class="principal">
    <nav>
        <h2 class="logo" ><a routerLink="/">Ossain<span>App</span></a></h2>
        <ul>
          
            <li><a routerLink="/">Sobre</a></li>
            <li><a routerLink="/">Denuncias</a></li>

        </ul>
        <button type="button">Registrar</button>
    </nav>
</div>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,100&display=swap" rel="stylesheet">
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
