// 3.
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonComponent {
    // 2.
    @Input() personList: string[];
}
