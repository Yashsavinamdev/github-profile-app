import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';
import { RepoDisplayComponent } from './components/repo-display/repo-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-mat-module';
import { HomeComponent } from './common-component/home/home.component';
import { SidebarComponent } from './common-component/sidebar/sidebar.component';
import { CommonDialogComponent } from './common-component/common-dialog/common-dialog.component';
import { PaginationComponent } from './common-component/pagination/pagination.component';
import { LoaderComponent } from './common-component/loader/loader.component';

@NgModule({
  declarations: [AppComponent, ProfileDisplayComponent, RepoDisplayComponent, HomeComponent, SidebarComponent, CommonDialogComponent, PaginationComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
