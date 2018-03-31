import * as fromRouter from '@ngrx/router-store';
import { IssueState } from '../../../container-modules/issue-container/store/issue.reducer';


export interface IAppStoreState {
    issues: IssueState;
}

export const DEFAULT_APP_STORE_STATE = {};

/** Reducer */
export function appstore(state: any = DEFAULT_APP_STORE_STATE, action: any) {}


export const MainReducer = {
    routerReducer: fromRouter.routerReducer
    // appStore: appStore
};
