import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';

import { SharedModule } from './../shared/ui/shared.module';
import { ChallengesRoutingModule } from './challenges-routing.module';
// import { ChallengeActionsComponent } from './challenge-actions/challenge-actions.component';
import { ChallengeActionModule } from './challenge-actions/challenge-action.module';

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent
        // ChallengeActionsComponent
    ],
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule,
        ChallengeActionModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})

export class ChallengesModule { }
