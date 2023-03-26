import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@components/button';
import { JsonService } from '@services/json';
import { IndentSize, indentSizes } from '@services/json/json.interface';
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

	protected indentSize: IndentSize = 2;

	constructor(private readonly jsonService: JsonService) {}

	protected setIndentSize(): void {
		this.jsonService.setIndentSize(this.indentSize)
	}

	protected copyOutput(): void {
		this.jsonService.copyOutput().subscribe()
	}
}
