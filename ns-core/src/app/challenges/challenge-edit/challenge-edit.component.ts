import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenge-edit.component.html',
    styleUrls: ['./challenge-edit.component.css'],
    moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private pageRoute: PageRoute) { }

    ngOnInit() {
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //     console.log(paramMap.get('mode'));
        // })
        // PageRoute can still fetch information even though the page was cache in the stack.
        // No metter if this page loaded for the first time or retrive from cache
        // NOTE: Do use this if you know that this page will never be cache
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                console.log(paramMap.get('mode'));
            });
        })
    }
}
