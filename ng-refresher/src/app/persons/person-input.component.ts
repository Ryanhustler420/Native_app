import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    input = '';

    onCreatePerson() {
        console.log(`created a person ${this.input}`);
        this.input = '';
    }
}
