import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationFormsService{
	constructor(private http:Http){
		console.log('Form Sercie Initialized...');
	}

	getRegistrationForms(){
		return this.http.get('/api/registration-forms')
			.map(res => res.json());
	}
}