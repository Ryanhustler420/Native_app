import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { UIService } from "./shared/ui/ui.service";
import { Subscription } from 'rxjs';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    activeChallenge = '';
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;

    constructor(private uiService: UIService, private changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        // this.drawerSub = this.uiService.drawerState.subscribe(() => {
        //     this.drawerComponent.sideDrawer.toggleDrawerState();
        // });
        this.changeDetectionRef.detectChanges();
    }

    onChallengeInput(challengeDescription: string) {
        this.activeChallenge = challengeDescription;
        // console.log("onChallengeInput", challengeDescription);
    }
}
