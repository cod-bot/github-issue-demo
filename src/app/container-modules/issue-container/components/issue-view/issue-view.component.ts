import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../store/issue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.css']
})
export class IssueViewComponent implements OnInit {
  issues$: Observable<Array<Object>>;
  assignee$: Observable<Array<String>>;
  constructor(private issueSvc: IssueService) { }

  ngOnInit() {
    this.issueSvc.dIssueResults();
    this.assignee$ = this.issueSvc.sGetAssignee();
    this.issues$ = this.issueSvc.sGetIssues();
  }

  getIssueDetails(routeId: number) {
    this.issueSvc.dGetIssueContent({id: routeId});
  }

}
