import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from "@angular/router";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { TodayComponent } from "./today/today.component";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";

const routes: Routes = [
    {
        path: 'tabs',
        component: ChallengeTabsComponent,
        children: [
            { path: 'today', component: TodayComponent, outlet: 'today' },
            {
                path: 'current-challenge',
                component: CurrentChallengeComponent,
                outlet: 'currentChallenge'
            },
        ]
    },
    { path: ':mode', component: ChallengeEditComponent },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChallengesRoutingModule { }
