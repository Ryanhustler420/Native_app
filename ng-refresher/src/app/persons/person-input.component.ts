import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    @Output() personCreateEvent = new EventEmitter<string>();
    input = '';

    onCreatePerson() {
        console.log(`created a person ${this.input}`);
        this.personCreateEvent.emit(this.input);
        this.input = '';
    }
}
