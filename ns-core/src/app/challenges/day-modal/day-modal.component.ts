import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
    selector: 'ns-day-modal',
    templateUrl: './day-modal.component.html',
    styleUrls: ['./day-modal.component.css'],
    moduleId: module.id,
})
export class DayModalComponent implements OnInit {
    loadedDate: Date;

    constructor(private modalParams: ModalDialogParams) { }

    ngOnInit() {
        this.loadedDate = (this.modalParams.context as { date: Date }).date
    }

    onHandleInput(status: string) {
        // this data can be read from the place where we open the dialog
        this.modalParams.closeCallback(status);
    }
}
