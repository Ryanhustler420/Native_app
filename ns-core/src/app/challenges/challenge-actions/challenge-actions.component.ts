import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DayStatus } from '../day.model';

@Component({
    selector: 'ns-challenge-actions',
    templateUrl: './challenge-actions.component.html',
    styleUrls: ['./challenge-actions.component.scss'],
    moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit, OnChanges {

    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText = "Cancel";
    @Input() chosen: 'complete' | 'fail' = null;
    action: 'complete' | 'fail' = null;
    done = false;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.chosen) {
            this.action = changes.chosen.currentValue;

            if (changes.chosen.currentValue === null) {
                this.done = false;
            }
        }
    }

    onAction(action: 'complete' | 'fail' | 'cancle') {
        this.done = true;
        let status = DayStatus.Open;
        if (action === 'complete') {
            status = DayStatus.Completed;
            this.action = 'complete';
        } else if (action === 'fail') {
            status = DayStatus.Failed;
            this.action = 'fail';
        } else if (action === 'cancle') {
            this.action = null;
            this.done = false;
        }
        this.actionSelect.emit(status);
    }

}
