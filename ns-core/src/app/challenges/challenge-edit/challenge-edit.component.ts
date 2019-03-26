import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallengeService } from './../challenge.service';

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenge-edit.component.html',
    styleUrls: ['./challenge-edit.component.scss'],
    moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;
    constructor(
        private activatedRoute: ActivatedRoute,
        private pageRoute: PageRoute,
        private router: RouterExtensions,
        private challengeService: ChallengeService
    ) { }

    ngOnInit() {
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //     console.log(paramMap.get('mode'));
        // })
        // PageRoute can still fetch information even though the page was cache in the stack.
        // No metter if this page loaded for the first time or retrive from cache
        // NOTE: Do use this if you know that this page will never be cache
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                // console.log(paramMap.get('mode'));
                if (!paramMap.has('mode')) {
                    this.isCreating = true;
                } else {
                    this.isCreating = paramMap.get('mode') !== 'edit'
                }
            });
        })
    }

    onSubmit(title: string, description: string) {
        // console.log(title, description);
        this.challengeService.createNewChallenge(title, description);
        this.router.backToPreviousPage();
    }
}
