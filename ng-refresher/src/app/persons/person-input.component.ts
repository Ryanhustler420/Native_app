import { Component, OnInit } from '@angular/core';
import { PersonService } from './persons.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    // @Output() personCreateEvent = new EventEmitter<string>();
    input = '';

    constructor(private personService: PersonService,
        // private route: Router
    ) { }

    onCreatePerson() {
        console.log(`created a person ${this.input}`);
        // this.personCreateEvent.emit(this.input);
        this.personService.addPerson(this.input);
        // this.route.navigate(['']);
        this.input = '';
    }
}
