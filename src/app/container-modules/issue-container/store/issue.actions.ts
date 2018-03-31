import { Injectable } from '@angular/core';
import { ActionCreatorFactory } from '../../../core-modules/app-store';



@Injectable()
export class IssueActions {

    // create actions here
    static GET_ISSUES                     = '[IssueActions] GET_ISSUES';
    static ISSUE_RESULTS                  = '[IssueActions] ISSUE_RESULTS';

    // tslint:disable-next-line:no-non-null-assertion
    getIssues                             = ActionCreatorFactory.create!(IssueActions.GET_ISSUES);
    // tslint:disable-next-line:no-non-null-assertion
    issueResults                             = ActionCreatorFactory.create!(IssueActions.ISSUE_RESULTS);

}
