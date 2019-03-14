import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';


import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';
import { TodayComponent } from './challenges/today/today.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        TodayComponent,
        AuthComponent,
        ActionBarComponent,
        ChallengeTabsComponent,
        DayModalComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    // entryComponent help us when we want to load a component which could be created but you
    // are not using that component anywhere eles so 'entryComponent' will be prepare for render
    // that component. more on the DOCS

    // https://github.com/NativeScript/nativescript-sdk-examples-ng/blob/master/app/ng-ui-category/modal-view-ng/modal-view-examples.module.ts
    entryComponents: [DayModalComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
