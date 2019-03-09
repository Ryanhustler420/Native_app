// BrowserModule is simple module which unlock some feature which is used by angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PersonComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
// 6.
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // imports components here
    AppComponent,
    PersonComponent,
    PersonInputComponent
  ],
  imports: [
    // imports other modules here
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // import services here
  ],

  // this is only use in your main module like app module aka ROOT component
  bootstrap: [AppComponent]
})
export class AppModule { }
