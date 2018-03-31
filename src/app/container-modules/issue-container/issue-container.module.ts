import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueViewComponent } from './components/issue-view/issue-view.component';
import { MainViewComponent } from './container/main-view/main-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssueView } from './store/issue.reducer';
import { IssueEffects } from './store/issue.effects';
import { IssueService } from './store/issue.service';
import { IssueActions } from './store/issue.actions';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { IssueContentComponent } from './components/issue-content/issue-content.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forFeature('issues', IssueView),
    EffectsModule.forFeature([IssueEffects]),
    MomentModule
  ],
  providers: [IssueService, IssueActions],
  declarations: [IssueViewComponent, MainViewComponent, IssueContentComponent],
  exports: [IssueViewComponent, MainViewComponent]
})
export class IssueContainerModule { }
