import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ButtonComponent } from '@components/button'
import { FormsModule } from '@angular/forms'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { Indent, IndentSize, IndentType, indentSizes, indentTypes } from '@interfaces/json.interface'
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
	public indentSize: IndentSize = 4
	public indentType: IndentType = 'Tabs'

	@Output() downloadClick = new EventEmitter<void>()
	@Output() copyClick = new EventEmitter<void>()
	@Output() indentChange = new EventEmitter<Indent>()
	@Output() resetClick = new EventEmitter<void>()

	ngOnInit(): void {
		const storedSettings = restoreIndent()
		if (storedSettings) {
			this.indentSize = +storedSettings.size as IndentSize
			this.indentType = storedSettings.type
			this.setIndent()
		}
	}

	public setIndent(): void {
		const indent = { size: +this.indentSize as IndentSize, type: this.indentType }
		this.indentChange.emit(indent)
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
