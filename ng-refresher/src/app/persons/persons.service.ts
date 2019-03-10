import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    // if this not provide than you have to manually
    // set in providers array in app.module.ts file
    providedIn: 'root'
})
export class PersonService {
    // whenever referance type or object or array aka reference type changes in
    // angular it won't render the component again
    // because the reference is already in memory and it is just pointer which get attach
    // to new value in the array so the pointer head will be the same as before

    // Subject is as same as EventEmitter.
    // Actullay EventEmitter is build on top of Subject
    personChanged = new Subject<string[]>();
    persons: string[] = [];

    constructor(private http: HttpClient) { }

    fetchPersons() {
        return this.http.get<any>('https://swapi.co/api/people')
            .pipe(map(resData => {
                // filtering the obj and send the array as transform array
                return resData.results.map(character => character.name);
            })).subscribe(transformDate => {
                this.personChanged.next(transformDate);
            });
    }

    addPerson(name: string) {
        this.persons.push(name);
        this.personChanged.next(this.persons);
    }

    removePerson(name: string) {
        this.persons = this.persons.filter(person => person !== name);
        this.personChanged.next(this.persons);
    }
}
