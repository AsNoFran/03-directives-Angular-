import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bonjour !';
  isAdmin: boolean = true;

  // function for "The Admin Button"

  isAdminCommand() {
    this.isAdmin = !this.isAdmin;
  }
}
