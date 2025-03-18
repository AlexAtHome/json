import { ChangeDetectionStrategy, Component, model, OnInit, output } from '@angular/core'
import { ButtonComponent } from '@components/button'
import { FormsModule } from '@angular/forms'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { IndentSize, IndentType, indentSizes, indentTypes } from '@interfaces/json.interface'
import { restoreIndent, saveIndent } from '@func/storage'
import { SelectComponent } from '@components/select'

@Component({
	selector: 'app-output-toolbar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgxBootstrapIconsModule, ButtonComponent, FormsModule, SelectComponent],
	templateUrl: './output-toolbar.component.html',
	host: {
		class: 'flex flex-row flex-wrap gap-4',
	},
})
export class OutputToolbarComponent implements OnInit {
	readonly indentSizes = indentSizes
	readonly indentTypes = indentTypes
	readonly indentSize = model<IndentSize>(4)
	readonly indentType = model<IndentType>('Tabs')

	readonly downloadClick = output<void>()
	readonly copyClick = output<void>()
	readonly resetClick = output<void>()

	ngOnInit(): void {
		const storedSettings = restoreIndent()
		if (storedSettings) {
			this.indentSize.set(+storedSettings.size as IndentSize)
			this.indentType.set(storedSettings.type)
		}
	}

	public saveIndent(): void {
		const indent = { size: this.indentSize(), type: this.indentType() }
		saveIndent(indent)
	}

	public copyOutput(): void {
		this.copyClick.emit()
	}

	public downloadOutput(): void {
		this.downloadClick.emit()
	}

	public reset(): void {
		this.resetClick.emit()
	}
}
