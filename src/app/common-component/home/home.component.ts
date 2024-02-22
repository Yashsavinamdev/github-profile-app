import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchQuery = '';

  ngOnInit(): void {}

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
