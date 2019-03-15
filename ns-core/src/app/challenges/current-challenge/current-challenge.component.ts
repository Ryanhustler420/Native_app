import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: [
        './_current-challenge.component.common.scss',
        './current-challenge.component.scss'
    ],
    moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit {

    weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    days: { dayInMonth: number, dayInWeek: number }[] = [];

    constructor(private modalDialog: ModalDialogService, private _vcRef: ViewContainerRef, private uiService: UIService) { }

    ngOnInit() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const dayInWeek = date.getDay();
            this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
            console.log(this.days);
        }
    }

    onChangeStatus() {
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            context: { date: new Date() },
            viewContainerRef: this.uiService.getRootVCRef() ? this.uiService.getRootVCRef() : this._vcRef
        }).then((status: string) => {
            console.log(status);
        })
    }
}
