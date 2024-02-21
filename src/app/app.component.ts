import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  searchUser(): void {
    // Check if searchQuery is not empty
    if (this.searchQuery) {
      // Navigate to the profile page with the entered name as a query parameter
      this.router.navigate(['/profile'], {
        queryParams: { username: this.searchQuery },
      });
    }
  }
}
