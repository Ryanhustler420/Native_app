import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DayStatus } from '../day.model';

@Component({
    selector: 'ns-challenge-actions',
    templateUrl: './challenge-actions.component.html',
    styleUrls: ['./challenge-actions.component.scss'],
    moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {

    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText = "Cancel";

    constructor() { }

    ngOnInit() {
    }

    onAction(action: 'complete' | 'fail' | 'cancle') {
        let status = DayStatus.Open;
        if (action === 'complete') {
            status = DayStatus.Completed;
        } else if (action === 'fail') {
            status = DayStatus.Failed;
        }
        this.actionSelect.emit(status);
    }

}
