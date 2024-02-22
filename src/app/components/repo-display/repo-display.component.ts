import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GithubAPIRes } from 'src/app/interfaces/gitHubApiRes';
import { ReposList } from 'src/app/interfaces/reposList.model';
import { GithubAppService } from '../services/github-app.service';

@Component({
  selector: 'app-repo-display',
  templateUrl: './repo-display.component.html',
  styleUrls: ['./repo-display.component.css'],
})
export class RepoDisplayComponent implements OnInit {
  @Input() profileData: GithubAPIRes = {} as GithubAPIRes;
  @Input() userName = '';
  reposData: ReposList[] = [];
  isLoading = false;
  currentPage = 1;
  pageSize = 3;
  @Output() showReposChange = new EventEmitter<boolean>();
  constructor(private githubSrv: GithubAppService) {}

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories() {
    //clientSidePagination but if it was server side we would need to call api again and again
    if (this.profileData.public_repos > 0 && this.reposData.length === 0) {
      this.isLoading = true;
      this.githubSrv.getUserRepositories(this.userName).subscribe(
        (repos) => {
          this.reposData = repos;
          this.isLoading = false;
          console.log(this.reposData);
        },
        (err) => {
          this.isLoading = false;
        }
      );
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadRepositories();
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.profileData.public_repos) {
      this.currentPage++;
      this.loadRepositories();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadRepositories();
    }
  }

  goBackToProfile() {
    this.showReposChange.emit(false);
  }
}
