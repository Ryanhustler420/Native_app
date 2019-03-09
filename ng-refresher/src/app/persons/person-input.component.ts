import { Component } from '@angular/core';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    input: string;

    onCreatePerson(el: string) {
        console.log(`created a person ${el}`);
    }
}
