import { Component } from '@angular/core';
import {RegistrationFormsService} from '../../services/registration-forms.service';

@Component({
  moduleId: module.id,
  selector: 'registration-forms',
  templateUrl: 'registration-forms.component.html'
})

export class RegistrationFormsComponent {
	constructor(private registrationFormsService:RegistrationFormsService){
	
	}
}
