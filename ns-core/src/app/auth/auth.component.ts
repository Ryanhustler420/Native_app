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
                validators: [Validators.required, Validators.maxLength(6)]
            }),
        });
    }

    onSignin() {
        // old navigation stack will be clear
        this.router.navigate(['/today'], { clearHistory: true });
    }

    onSubmit() {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();

        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        console.log(email, password);
    }

}
