import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

// 3.
const routes: Routes = [
    { path: '', component: PersonComponent },
    // localhost:4200/input
    { path: 'input', component: PersonInputComponent }
];

// 2.
@NgModule({
    // 4.
    imports: [RouterModule.forRoot(routes)],
    // 5.
    exports: [RouterModule]
})
// 1.
export class AppRoutingModule { }
