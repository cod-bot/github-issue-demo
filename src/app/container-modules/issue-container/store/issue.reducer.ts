import * as _ from 'lodash';
import { Action } from '@ngrx/store';

import { IssueActions } from './issue.actions';
import { IAction } from '../../../core-modules/app-store/interfaces/IAction';


/** Interface and Initial State */
// tslint:disable-next-line:no-empty-interface
export interface IssueState {
    result: Array<Object>;
}


export const DEFAULT_ISSUE_STATE = {
    result: []
};


/** Reducer */
export function IssueView(state: IssueState = DEFAULT_ISSUE_STATE, action: IAction): IssueState {

    switch (action.type) {

        case IssueActions.ISSUE_RESULTS:
            return handleIssueResults(state, action);

        default:
            return state;
    }

// tslint:disable-next-line:no-shadowed-variable
function handleIssueResults(state: IssueState, action: IAction): IssueState {
      const newState = _.cloneDeep(state);
      console.log(action.payload);
      newState.result = action.payload;
      return newState;
  }
}


/** Reducer Handlers */
