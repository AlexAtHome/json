import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@components/button';
import { IndentSize, indentSizes, IndentType, indentTypes, JsonService } from '@services/json';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-toolbar',
  standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgxBootstrapIconsModule, ButtonComponent, FormsModule],
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

	constructor(private readonly jsonService: JsonService) {}

	protected setIndentSize(): void {
		this.jsonService.setIndentSize(this.indentSize)
	}

	protected setIndentType(): void {
		this.jsonService.setIndentType(this.indentType)
	}

	protected copyOutput(): void {
		this.jsonService.copyOutput().subscribe()
	}

	protected downloadOutput(): void {
		this.jsonService.downloadOutput().subscribe()
	}
}
