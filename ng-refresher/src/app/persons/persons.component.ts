import { Component, OnInit } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonComponent implements OnInit {
    personList: string[];

    constructor(private personService: PersonService) {
        // this.personList = personService.persons;
    }

    // Life cycle hooks for initilaztion work
    ngOnInit() {
        this.personList = this.personService.persons;
    }

    onRemovePerson(personName: string) {
        this.personService.removePerson(personName);
    }
}
