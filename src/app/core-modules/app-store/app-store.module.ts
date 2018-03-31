import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MainReducer, IAppStoreState } from './state/app-store.reducer';
import { ApplicationEffects } from './state/app-store.effects';
import { EffectsModule } from '@ngrx/effects';
import { AppStoreService } from './state/app-store.service';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(MainReducer, {}),
        EffectsModule.forRoot([ApplicationEffects])
    ],
    declarations: [],
    providers: [
        AppStoreService
    ],
    exports: [],
    entryComponents: [

    ]
})
export class AppStoreModule {}
