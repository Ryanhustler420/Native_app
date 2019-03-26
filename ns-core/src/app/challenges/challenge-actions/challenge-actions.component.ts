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
    action: 'complete' | 'fail' = null;

    constructor() { }

    ngOnInit() {
    }

    onAction(action: 'complete' | 'fail' | 'cancle') {
        let status = DayStatus.Open;
        if (action === 'complete') {
            status = DayStatus.Completed;
            this.action = 'complete';
        } else if (action === 'fail') {
            status = DayStatus.Failed;
            this.action = 'fail';
        } else if (action === 'cancle') {
            this.action = null;
        }
        this.actionSelect.emit(status);
    }

}
