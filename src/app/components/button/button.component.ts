import { ChangeDetectionStrategy, Component, EventEmitter, Input } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
	selector: 'app-button',
	imports: [NgClass],
	templateUrl: './button.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'contents',
	},
})
export class ButtonComponent {
	@Input() type: 'button' | 'submit' | 'reset' = 'submit'
	@Input() disabled = false
	@Input() click = new EventEmitter<Event>()
	@Input() color: 'green' | 'blue' | 'red' = 'blue'
}
