import { Component } from '@angular/core';
import {RegistrationFormsService} from './services/registration-forms.service';

@Component({

  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[RegistrationFormsService]
})

export class AppComponent { }
