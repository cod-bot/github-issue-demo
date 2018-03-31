import {Action} from '@ngrx/store';

export class IAction implements Action {
    type: '';
    payload?: any;
}
