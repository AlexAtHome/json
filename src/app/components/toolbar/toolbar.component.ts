import { NgForOf } from '@angular/common'
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
	imports: [NgForOf, NgxBootstrapIconsModule, ButtonComponent, FormsModule, SelectComponent],
	templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
	@HostBinding('class') readonly className = 'flex flex-row flex-wrap gap-4'
	protected indentSizes = indentSizes
	protected indentTypes = indentTypes
	protected indentSize: IndentSize = 2
	protected indentType: IndentType = 'Spaces'

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

	protected setIndent(): void {
		const indent = { size: +this.indentSize as IndentSize, type: this.indentType }
		this.indentChange.emit(indent)
		saveIndent(indent)
	}

	protected copyOutput(): void {
		this.copyClick.emit()
	}

	protected downloadOutput(): void {
		this.downloadClick.emit()
	}

	protected reset(): void {
		this.resetClick.emit()
	}
}
