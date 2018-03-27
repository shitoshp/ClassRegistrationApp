import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RegistrationFormsComponent} from './components/registration-forms/registration-forms.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, RegistrationFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
