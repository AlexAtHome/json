import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '@components/button';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Indent, IndentSize, IndentType, indentSizes, indentTypes } from '@interfaces/json.interface';

@Component({
  selector: 'app-toolbar',
  standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgxBootstrapIconsModule, ButtonComponent, FormsModule],
  templateUrl: './toolbar.component.html',
	host: {
		class: 'flex flex-row gap-4'
	}
})
export class ToolbarComponent {
	protected indentSizes = indentSizes;
	protected indentTypes = indentTypes;
	protected indentSize: IndentSize = 2;
	protected indentType: IndentType = 'Spaces';

	@Output() download = new EventEmitter<void>();
	@Output() copy = new EventEmitter<void>();
	@Output() indentChange = new EventEmitter<Indent>();

	protected setIndent(): void {
		this.indentChange.emit({ size: this.indentSize, type: this.indentType })
	}

	protected copyOutput(): void {
		this.copy.emit()
	}

	protected downloadOutput(): void {
		this.download.emit()
	}
}
