import { NgModule } from "@angular/core";

import { ChallengeEditComponent } from './challenge-edit.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from '../../shared/ui/shared.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";

// when creating module check for component.html for what element or feature of nativescript is being in use
// and than import those require imports

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule,
        // NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([{ path: '', component: ChallengeEditComponent }]),
        SharedModule
    ]
})



export class ChallengeEditModule { }
