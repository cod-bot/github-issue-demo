import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { IssueContainerModule } from './container-modules/issue-container/issue-container.module';
import { AppStoreModule } from './core-modules/app-store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    IssueContainerModule,
    AppStoreModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
