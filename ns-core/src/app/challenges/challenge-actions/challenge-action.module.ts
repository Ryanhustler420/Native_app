import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeActionsComponent } from './challenge-actions.component';

@NgModule({
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeActionModule { }
