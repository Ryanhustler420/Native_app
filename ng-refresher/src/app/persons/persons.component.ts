import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonComponent implements OnInit, OnDestroy {
    personList: string[];
    private personListSubscription: Subscription;

    constructor(private personService: PersonService) {
        // this.personList = personService.persons;
    }

    // Life cycle hooks for initilaztion work
    ngOnInit() {
        // this.personList = this.personService.persons;
        this.personListSubscription = this.personService.personChanged.subscribe((persons) => {
            this.personList = persons;
        });
        this.personService.fetchPersons();
    }

    onRemovePerson(personName: string) {
        this.personService.removePerson(personName);
    }

    ngOnDestroy() {
        // this help us to prevent memory leaks. only use when using Subject
        // else the Default EventEmtter Does all the cleaning job behind the scene
        this.personListSubscription.unsubscribe();
    }
}
