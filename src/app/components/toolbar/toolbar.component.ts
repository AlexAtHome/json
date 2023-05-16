import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '@components/button';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Indent, IndentSize, IndentType, indentSizes, indentTypes } from '@interfaces/json.interface';
import { restoreIndent, saveIndent } from '@func/storage';
import { SelectComponent } from '@components/select';

@Component({
  selector: 'app-toolbar',
  standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgxBootstrapIconsModule, ButtonComponent, FormsModule, SelectComponent],
  templateUrl: './toolbar.component.html',
	host: {
		class: 'flex flex-row flex-wrap gap-4'
	}
})
export class ToolbarComponent implements OnInit {
	protected indentSizes = indentSizes;
	protected indentTypes = indentTypes;
	protected indentSize: IndentSize = 2;
	protected indentType: IndentType = 'Spaces';

	@Output() download = new EventEmitter<void>();
	@Output() copy = new EventEmitter<void>();
	@Output() indentChange = new EventEmitter<Indent>();

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
		this.copy.emit()
	}

	protected downloadOutput(): void {
		this.download.emit()
	}
}
