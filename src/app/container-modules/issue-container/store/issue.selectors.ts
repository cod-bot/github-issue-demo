import { IAppStoreState } from '../../../core-modules/app-store';

export function getIssueResults(state: IAppStoreState) {
    const results = state.issues.result;
    return results;
}

export function getAssignee(state: IAppStoreState) {
  const assignee = state.issues.assignees;
  return assignee;
}

export function issueContent(state: IAppStoreState) {
  const content = state.issues.issueContent;
  return content;
}


