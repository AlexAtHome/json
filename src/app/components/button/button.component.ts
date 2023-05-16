import { Component, EventEmitter, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
	host: {
		class: 'contents'
	}
})
export class ButtonComponent {
	@Input() type: 'button' | 'submit' | 'reset' = 'submit';
	@Input() disabled = false;
	@Input() click = new EventEmitter<Event>()
	@Input() color: 'green' | 'blue' = 'blue'
}
