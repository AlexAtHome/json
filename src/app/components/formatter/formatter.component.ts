import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button';
import { JsonFormatPipe } from '@pipes/json-format';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { from, Observable } from 'rxjs';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	standalone: true,
	imports: [CommonModule, FormsModule, JsonFormatPipe, NgxBootstrapIconsModule, ButtonComponent],
	host: {
		class: 'flex flex-col md:flex-row items-stretch gap-2 sm:gap-4 relative'
	}
})
export class FormatterComponent {
	protected input = ''

	protected copyOutput(): void {
		const pipe = new JsonFormatPipe()
		const output = pipe.transform(this.input)
		this.copy(output).subscribe()
	}

	private copy(input: string): Observable<void> {
		return from(navigator.clipboard.writeText(input))
	}
}

