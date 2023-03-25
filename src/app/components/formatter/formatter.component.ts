import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonFormatPipe } from '@pipes/json-format';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	styleUrls: ['./formatter.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, JsonFormatPipe],
})
export class FormatterComponent {
	protected input = JSON.stringify({
		foo: 'bar'
	})
}

