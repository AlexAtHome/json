import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	styleUrls: ['./formatter.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, HighlightModule],
})
export class FormatterComponent {
	protected input = JSON.stringify({
		foo: 'bar'
	})

	get output() {
		return JSON.parse(this.input)
	}
}
