import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from "./forms/forms.component";
import { FormData } from './modal/form.interface';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, FormsComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'loan-calculator';

	loanRelatedData!: any;
	currencyFormatter = new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'INR'
	});

	loanFormData = (formData: FormData) => {
		const loanAmount = formData.loanAmount;
		const monthlyIntersetRate = formData.annualIntersetRate / 100 / 12;;
		const loanTermInMonths = formData.loanTerm * 12;
		const monthlyPaymentAmount = (loanAmount * monthlyIntersetRate) /
			(1 -
				Math.pow(
					1 + monthlyIntersetRate,
					-loanTermInMonths,
				));


		this.loanRelatedData = {
			monthlyPaymentAmount: this.currencyFormatter.format(monthlyPaymentAmount),
			totalAmountPaid: this.currencyFormatter.format(monthlyPaymentAmount * loanTermInMonths),
			totalInterestPaid: this.currencyFormatter.format((monthlyPaymentAmount * loanTermInMonths) - loanAmount)
		}
	}
}