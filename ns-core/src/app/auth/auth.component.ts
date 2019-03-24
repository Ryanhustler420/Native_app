import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    moduleId: module.id,
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    isLogin = true;
    @ViewChild('passwordEl') passwordEl: ElementRef<TextField>;
    @ViewChild('emailEl') emailEl: ElementRef<TextField>;

    constructor(private router: RouterExtensions) { }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.minLength(6)]
            }),
        });

        this.form.get('email').statusChanges.subscribe(status => {
            console.log(status);
            this.emailControlIsValid = status === 'VALID';
        })

        this.form.get('password').statusChanges.subscribe(status => {
            console.log(status);
            this.passwordControlIsValid = status === 'VALID';
        })
    }

    onSubmit() {
        this.onDone();

        if (!this.form.valid) {
            return;
        }

        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        if (this.isLogin) {
            console.log('Logging in...');
        } else {
            console.log('Signing in...')
        }

        this.router.navigate(['/challenges']);
    }

    onSwitch() {
        this.isLogin = !this.isLogin;
    }

    onDone() {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    }

}
