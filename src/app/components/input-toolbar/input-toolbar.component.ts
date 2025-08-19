import { ChangeDetectionStrategy, Component, effect, model, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SelectComponent } from '@components/select'
import { restoreFormat, saveFormat } from '@func/storage'
import { formats, type Format } from '@interfaces/json.interface'

@Component({
	selector: 'app-input-toolbar',
	templateUrl: './input-toolbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FormsModule, SelectComponent],
	host: {
		class: 'flex items-center gap-4',
	},
})
export class InputToolbarComponent implements OnInit {
	readonly decodeBase64 = model(false)
	readonly format = model<Format>('json')
	protected readonly formats = formats

	constructor() {
		effect(() => {
			saveFormat(this.format())
		})
	}

	ngOnInit(): void {
		const storedFormat = restoreFormat()
		if (storedFormat) {
			this.format.set(storedFormat)
		}
	}
}
