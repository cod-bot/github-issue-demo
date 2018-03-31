import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../store/issue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issue-content',
  templateUrl: './issue-content.component.html',
  styleUrls: ['./issue-content.component.css']
})
export class IssueContentComponent implements OnInit {
  content$: Observable<Object>;
  constructor(private issueSvc: IssueService) { }

  ngOnInit() {
    this.content$ = this.issueSvc.sGetIssueContent();
  }

}
