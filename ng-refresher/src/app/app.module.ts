// BrowserModule is simple module which unlock some feature which is used by angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 5.
import { PersonComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

@NgModule({
  declarations: [
    // imports components here
    AppComponent,
    PersonComponent,
    PersonInputComponent
  ],
  imports: [
    // imports other modules here
    BrowserModule
  ],
  providers: [
    // import services here
  ],

  // this is only use in your main module like app module aka ROOT component
  bootstrap: [AppComponent]
})
export class AppModule { }
