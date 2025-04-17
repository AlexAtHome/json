import { ChangeDetectionStrategy, Component, model } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SelectComponent } from '@components/select'

@Component({
	selector: 'app-input-toolbar',
	templateUrl: './input-toolbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FormsModule, SelectComponent],
})
export class InputToolbarComponent {
	readonly decodeBase64 = model(false)
	readonly format = model('json')
	readonly formats = ['json', 'xml']
}
