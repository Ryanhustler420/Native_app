import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    moduleId: module.id,
})
export class AuthComponent implements OnInit {

    constructor(private router: RouterExtensions) { }

    ngOnInit() {
    }

    onSignin() {
        // old navigation stack will be clear
        this.router.navigate(['/today'], { clearHistory: true });
    }

}
