import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core'
import { ButtonComponent } from '@components/button'
import { FormsModule } from '@angular/forms'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { Indent, IndentSize, IndentType, indentSizes, indentTypes } from '@interfaces/json.interface'
import { restoreIndent, saveIndent } from '@func/storage'
import { SelectComponent } from '@components/select'

@Component({
	selector: 'app-toolbar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgxBootstrapIconsModule, ButtonComponent, FormsModule, SelectComponent],
	templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
	@HostBinding('class') readonly className = 'flex flex-row flex-wrap gap-4'
	public indentSizes = indentSizes
	public indentTypes = indentTypes
	public indentSize: IndentSize = 2
	public indentType: IndentType = 'Spaces'

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
