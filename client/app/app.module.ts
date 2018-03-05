import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegistrationFormsComponent} from './components/registration-forms/registration-forms.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, RegistrationFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
