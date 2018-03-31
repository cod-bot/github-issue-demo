import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAction } from '../interfaces/IAction';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

@Injectable()
export class ApplicationEffects {

    @Effect()
    eError$ = this.action$
        .ofType('ERROR')
        .switchMap((pAction: IAction) => {
                console.log('ERROR: ', pAction.payload);
                return Observable.empty();
            }
        );

    constructor(private action$: Actions) {
    }
}


export const error = (e: any): Observable<any> => {
    return Observable.of({type: 'ERROR', payload: e});
};
