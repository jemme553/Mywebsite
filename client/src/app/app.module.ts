import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CvComponent } from './cv/cv.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { DiplomaComponent } from './diploma/diploma.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CvComponent,
    ProfileComponent,
    ProjectsComponent,
    DiplomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
