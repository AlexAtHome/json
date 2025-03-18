import { Component, EventEmitter, HostBinding, Input } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
	selector: 'app-button',
	imports: [NgClass],
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	@HostBinding('class') readonly className = 'contents'
	@Input() type: 'button' | 'submit' | 'reset' = 'submit'
	@Input() disabled = false
	@Input() click = new EventEmitter<Event>()
	@Input() color: 'green' | 'blue' | 'red' = 'blue'
}
