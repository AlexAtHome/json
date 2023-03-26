import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToolbarComponent } from '@components/toolbar';
import { JsonService } from '@services/json';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	standalone: true,
	imports: [CommonModule, ToolbarComponent],
	host: {
		class: 'flex flex-col md:flex-row items-stretch gap-2 sm:gap-4 relative'
	}
})
export class FormatterComponent {
	protected output$ = this.jsonService.output$;

	protected indentSize$ = this.jsonService.indentSize$;

	protected error$ = this.jsonService.error$;

	constructor(private readonly jsonService: JsonService) {}

	protected setRawInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement
		this.jsonService.setRawInput(target.value)
	}
}

