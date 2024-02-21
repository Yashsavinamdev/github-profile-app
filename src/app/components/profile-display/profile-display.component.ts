import { Component, OnInit } from '@angular/core';
import { GithubAppService } from '../services/github-app.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css'],
})
export class ProfileDisplayComponent implements OnInit {
  user: any;
  constructor(private githubSrv: GithubAppService) {}

  ngOnInit(): void {
    this.githubSrv.getUser('yash').subscribe((data) => {
      console.log(data);
    });
  }
}
