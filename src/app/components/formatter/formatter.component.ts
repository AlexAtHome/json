import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button';
import { JsonService } from '@services/json';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	standalone: true,
	imports: [CommonModule, FormsModule, NgxBootstrapIconsModule, ButtonComponent],
	host: {
		class: 'flex flex-col md:flex-row items-stretch gap-2 sm:gap-4 relative'
	}
})
export class FormatterComponent {
	protected output$ = this.jsonService.output$;

	constructor(private readonly jsonService: JsonService) {}

	protected setRawInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement
		this.jsonService.setRawInput(target.value)
	}

	protected copyOutput(): void {
		this.jsonService.copyOutput().subscribe()
	}
}

