import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Store } from '@ngrx/store';
import { Http, Response, Headers, ResponseContentType } from '@angular/http';
import { IssueActions } from './issue.actions';
import { IAction } from '../../../core-modules/app-store/interfaces/IAction';
import { error } from '../../../core-modules/app-store/state/app-store.effects';
import { IAppStoreState } from '../../../core-modules/app-store';
import 'rxjs/add/operator/map';


@Injectable()
export class IssueEffects {
    // handle outside interaction here
    @Effect()
    eFileResult = this.action$
        .ofType(IssueActions.GET_ISSUES)
        .switchMap((pAction: IAction) => {
            return this.http.get(`https://api.github.com/repos/angular/angular.js/issues`)
            .map((res: Response) =>
                res.json())
            .switchMap((result: Response) => {
                return Observable.of(
                    {type: IssueActions.ISSUE_RESULTS, payload: result},
                );
            }).catch((e: Error) =>
                error(e)
            );
        });

    constructor(
        private action$: Actions,
        public store: Store<IAppStoreState>,
        public search: IssueActions,
        public http: Http
    ) {
    }
}
