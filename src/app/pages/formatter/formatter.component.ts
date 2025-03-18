import { Component, computed, model, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ToolbarComponent } from '@components/toolbar'
import copy from '@func/copy'
import download from '@func/download'
import { formatJson } from '@func/format-json'
import { isEqual } from '@func/is-equal'
import { Indent, IndentSize, IndentType } from '@interfaces/json.interface'

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	imports: [ToolbarComponent, FormsModule],
	host: {
		class: 'formatter-layout',
		role: 'application',
	},
})
export class FormatterComponent {
	private readonly indentType = signal<IndentType>('Spaces', { equal: isEqual })

	protected readonly indentSize = signal<IndentSize>(2, { equal: isEqual })

	protected readonly input = model<string>('')

	protected readonly output = computed(() => formatJson(this.input().trim(), this.indentType(), this.indentSize()))

	protected setIndent({ size, type }: Indent): void {
		this.indentSize.set(size)
		this.indentType.set(type)
	}

	protected copy(): void {
		copy(this.output().data)
	}

	protected download(): void {
		download(this.output().data)
	}

	protected reset(): void {
		this.input.set('')
	}
}
