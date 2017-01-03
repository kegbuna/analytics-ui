import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { UserService } from './user.service';

const routes: Routes = [
  { path: 'home', component: AppHeaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
