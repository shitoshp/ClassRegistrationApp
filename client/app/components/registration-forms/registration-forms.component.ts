import { Component } from '@angular/core';
import {RegistrationFormsService} from '../../services/registration-forms.service';
import {Form} from '../../../Form';

@Component({
  moduleId: module.id,
  selector: 'registration-forms',
  templateUrl: 'registration-forms.component.html'
})

export class RegistrationFormsComponent {
  registration_forms: Form[];

	constructor(private registrationFormsService:RegistrationFormsService){
    this.registrationFormsService.getRegistrationForms()
      .subscribe(registration_forms => {
        console.log(registration_forms);
        this.registration_forms = registration_forms;
      });
	}
}
