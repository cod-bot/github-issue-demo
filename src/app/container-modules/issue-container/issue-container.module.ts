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

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forFeature('issues', IssueView),
    EffectsModule.forFeature([IssueEffects]),
  ],
  providers: [IssueService, IssueActions],
  declarations: [IssueViewComponent, MainViewComponent],
  exports: [IssueViewComponent, MainViewComponent]
})
export class IssueContainerModule { }
