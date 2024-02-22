import { Component, OnInit } from '@angular/core';
import { GithubAppService } from '../services/github-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogComponent } from 'src/app/common-component/common-dialog/common-dialog.component';
import { GithubAPIRes } from 'src/app/interfaces/gitHubApiRes';
import { ReposList } from 'src/app/interfaces/reposList.model';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css'],
})
export class ProfileDisplayComponent implements OnInit {
  userName = '';
  isLoading = false;
  profileData: GithubAPIRes = {} as GithubAPIRes;
  showRepos = false;

  constructor(
    private githubSrv: GithubAppService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['username'];
      this.isLoading = true;
      this.githubSrv.getUser(this.userName).subscribe({
        next: (data) => {
          this.profileData = data;
          this.isLoading = false;
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err.error?.message);
            this.router.navigate(['/home']);
            this.isLoading = false;
            this.dialog.open(CommonDialogComponent, {
              data: {
                title: err.error?.message,
                message:
                  'User Name does not exist, please enter the correct User Name.',
                icon: 'assets/images/info.svg',
                primaryBtnText: 'Ok',
              },
              panelClass: 'common-info-dialog',
            });
          }
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    });
  }

  loadRepositories() {
    this.showRepos = true;
  }
  showOnlyProfile() {
    this.showRepos = false;
  }
}
