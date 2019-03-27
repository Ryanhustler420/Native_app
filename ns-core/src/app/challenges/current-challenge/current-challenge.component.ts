import { Component, ViewContainerRef, OnInit, OnDestroy } from "@angular/core";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";
import { ChallengeService } from './../challenge.service';
import { Challenge } from './../challenge.model';
import { Subscription } from 'rxjs';
import { Day, DayStatus } from "../day.model";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: [
        './_current-challenge.component.common.scss',
        './current-challenge.component.scss'
    ],
    moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {

    weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    currentChallenge: Challenge
    private curChallengeSub: Subscription

    constructor(
        private modalDialog: ModalDialogService,
        private _vcRef: ViewContainerRef,
        private uiService: UIService,
        private challengeService: ChallengeService
    ) { }

    ngOnInit() {
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge => {
            this.currentChallenge = challenge;
        });
    }

    ngOnDestroy() {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    }

    onChangeStatus(day: Day) {
        if (!this.getIsSettable(day.dayInMonth)) {
            return;
        }
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            context: { date: day.date, status: day.status },
            viewContainerRef: this.uiService.getRootVCRef() ? this.uiService.getRootVCRef() : this._vcRef
        }).then((status: DayStatus) => {
            if (status === DayStatus.Open) {
                return;
            }
            this.challengeService.updateDayStatus(day.dayInMonth, status);
        })
    }

    getRow(index: number, day: { dayInMonth: number, dayInWeek: number }) {
        const startRow = 1;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

        return startRow + weekRow + irregularRow;
    }

    getIsSettable(dayInMonth: number) {
        return dayInMonth <= new Date().getDate();
    }
}
