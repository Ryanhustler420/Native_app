import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Challenge } from './challenge.model';

@Injectable({
    providedIn: 'root'
})
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);


    createNewChallenge(title: string, description: string) {
        const newChallenge = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
        );
        // Save it to server
        this._currentChallenge.next(newChallenge);
    }

    get currentChallenge() {
        return this._currentChallenge.asObservable();
    }
}
