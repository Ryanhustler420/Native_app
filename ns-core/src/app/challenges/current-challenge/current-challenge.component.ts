import { Component, ViewContainerRef } from "@angular/core";
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
export class CurrentChallengeComponent {

    constructor(private modalDialog: ModalDialogService, private _vcRef: ViewContainerRef, private uiService: UIService) { }

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
