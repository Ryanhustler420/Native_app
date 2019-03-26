import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChallengeActionsComponent } from './challenge-actions.component';

@NgModule({
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent],
    imports: [NativeScriptCommonModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeActionModule { }
