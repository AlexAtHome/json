import { Component, HostBinding, computed, signal } from '@angular/core'
import { ToolbarComponent } from '@components/toolbar'
import copy from '@func/copy'
import download from '@func/download'
import { formatJson } from '@func/format-json'
import { isEqual } from '@func/is-equal'
import { Indent, IndentSize, IndentType } from '@interfaces/json.interface'

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	standalone: true,
	imports: [ToolbarComponent],
})
export class FormatterComponent {
	@HostBinding('class') readonly className = 'flex flex-col flex-grow gap-2 sm:gap-4 relative w-full md:w-8/12 p-4'
	@HostBinding('attr.role') readonly role = 'application'

	private readonly indentType = signal<IndentType>('Spaces', { equal: isEqual })

	protected readonly indentSize = signal<IndentSize>(2, { equal: isEqual })

	protected readonly input = signal('')

	protected readonly output = computed(() => formatJson(this.input().trim(), this.indentType(), this.indentSize()))

	protected setInput(event: Event): void {
		if (event instanceof ClipboardEvent) {
			const text = event.clipboardData?.getData('text/plain') ?? ''
			this.input.set(text)
			event.preventDefault()
			event.stopImmediatePropagation()
		} else {
			const target = event.target as HTMLElement
			this.input.set(target.innerText)
		}
	}

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
