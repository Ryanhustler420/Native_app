import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';

import { SharedModule } from './../shared/ui/shared.module';
import { ChallengesRoutingModule } from './challenges-routing.module';

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent
    ],
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})

export class ChallengesModule { }
