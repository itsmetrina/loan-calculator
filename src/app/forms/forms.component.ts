import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../modal/form.interface';

@Component({
	selector: 'app-forms',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './forms.component.html',
	styleUrl: './forms.component.scss'
})
export class FormsComponent {
	@Output() onformSubmit = new EventEmitter<FormData>();
	
	calculate(form: FormData) {
		this.onformSubmit.emit(form);
	}
}