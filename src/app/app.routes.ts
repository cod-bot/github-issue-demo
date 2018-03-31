import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { IssueViewComponent } from './container-modules/issue-container/components/issue-view/issue-view.component';
import { IssueContentComponent } from './container-modules/issue-container/components/issue-content/issue-content.component';
import { MainViewComponent } from './container-modules/issue-container/container/main-view/main-view.component';

export const AppRoutes: Routes = [
    { path: '', component: MainViewComponent },
    { path: 'issues/:id', component: IssueContentComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
