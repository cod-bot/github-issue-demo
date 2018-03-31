import * as _ from 'lodash';
import { Action } from '@ngrx/store';

import { IssueActions } from './issue.actions';
import { IAction } from '../../../core-modules/app-store/interfaces/IAction';


/** Interface and Initial State */
// tslint:disable-next-line:no-empty-interface
export interface IssueState {
    result: Array<Object>;
    assignees: Array<String>;
    issueContent: Object;
}


export const DEFAULT_ISSUE_STATE = {
    result: [],
    assignees: [],
    issueContent: {}
};


/** Reducer */
export function IssueView(state: IssueState = DEFAULT_ISSUE_STATE, action: IAction): IssueState {

    switch (action.type) {

        case IssueActions.ISSUE_RESULTS:
            return handleIssueResults(state, action);

        case IssueActions.CONTENT_RESULTS:
            return handleIssueContent(state, action);


        default:
            return state;
    }

// tslint:disable-next-line:no-shadowed-variable
function handleIssueResults(state: IssueState, action: IAction): IssueState {
      const newState = _.cloneDeep(state);
      action.payload.forEach(element => {
        if (null !== element.assignee && undefined !== element.assignee) {
            if (newState.assignees.indexOf(element.assignee.login) === -1) {
                newState.assignees.push(element.assignee.login);
             }
        }
      });
      newState.result = action.payload;
      return newState;
  }
}


function handleIssueContent(state: IssueState, action: IAction): IssueState {
    const newState = _.cloneDeep(state);
    newState.issueContent = action.payload;
    return newState;
}

