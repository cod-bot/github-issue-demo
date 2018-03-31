import { IAppStoreState } from '../../../core-modules/app-store';

export function getIssueResults(state: IAppStoreState) {
    const results = state.issues.result;
    return results;
}

