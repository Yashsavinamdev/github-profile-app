import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDisplayComponent } from './components/repo-display/repo-display.component';

const routes: Routes = [
  { path: 'profile', component: ProfileDisplayComponent },
  { path: 'repositories/:username', component: RepoDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
