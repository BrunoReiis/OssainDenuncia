import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Navbar -->
  <app-navbar></app-navbar>

  <!-- Routes -->
  <router-outlet></router-outlet>

  <!-- Footer -->
  <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OssainDenuncia';
}
