import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 1.
  persons: string[] = ['Checken', 'Paneer', 'Soya', 'Masroom'];
}
