import { ChangeDetectionStrategy, Component, model } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'app-input-toolbar',
	templateUrl: './input-toolbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FormsModule],
})
export class InputToolbarComponent {
	readonly decodeBase64 = model(false)
}
