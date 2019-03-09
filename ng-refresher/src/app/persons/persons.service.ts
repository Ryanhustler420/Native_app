import { Injectable } from '@angular/core';

@Injectable({
    // if this not provide than you have to manually
    // set in providers array in app.module.ts file
    providedIn: 'root'
})
export class PersonService {
    persons: string[] = ['Checken', 'Paneer', 'Soya', 'Masroom'];

    addPerson(name: string) {
        this.persons.push(name);
    }

    removePerson(name: string) {
        this.persons = this.persons.filter(person => person !== name);
        console.log(this.persons);
    }
}
