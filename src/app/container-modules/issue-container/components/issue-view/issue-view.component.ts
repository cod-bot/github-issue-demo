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
  constructor(private issueSvc: IssueService) { }

  ngOnInit() {
    this.issueSvc.dIssueResults();
    this.issues$ = this.issueSvc.sGetIssues();
  }

}
