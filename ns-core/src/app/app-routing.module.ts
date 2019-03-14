import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    // { path: 'edit-challenge', component: ChallengeEditComponent, data: {anyData: 'anyValue'} },
    {
        path: 'challenges',
        // component: ChallengeTabsComponent,
        // children: []
        // put class name after # sign
        loadChildren: '~/app/challenges/challenges.module#ChallengesModule'
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
