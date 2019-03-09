import { Component } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonComponent {
    personList: string[];

    constructor(private personService: PersonService) {
        this.personList = personService.persons;
    }
}
