import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { InputToolbarComponent } from '@components/input-toolbar/input-toolbar.component'
import { OutputToolbarComponent } from '@components/output-toolbar'
import copy from '@func/copy'
import download from '@func/download'
import { formatJson } from '@func/format-json'
import { isEqual } from '@func/is-equal'
import type { Format, IndentSize, IndentType } from '@interfaces/json.interface'

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [OutputToolbarComponent, InputToolbarComponent, FormsModule],
	host: {
		class: 'formatter-layout',
		role: 'application',
	},
})
export class FormatterComponent {
	readonly indentType = signal<IndentType>('Spaces', { equal: isEqual })
	readonly indentSize = signal<IndentSize>(2, { equal: isEqual })
	protected readonly input = model<string>('')
	protected readonly decodeBase64 = model(false)
	protected readonly encodeBase64 = model(false)
	protected readonly format = model<Format>('json')

	protected readonly decodedValue = computed(() => {
		if (this.decodeBase64()) {
			return atob(this.input())
		}
		return this.input().trim()
	})

	readonly output = computed(() => {
		try {
			switch (this.format()) {
				case 'json': {
					// TODO: Fix the select component so it returns a number when it's passed a list of numbers
					const size = Number(this.indentSize()) as IndentSize
					return formatJson(this.decodedValue(), this.indentType(), size)
				}
				default: {
					return {
						data: this.decodedValue().trim(),
					}
				}
			}
		} catch (e) {
			return {
				data: this.input().trim(),
				error: (e as Error).message,
			}
		}
	})

	protected readonly encodedValue = computed(() => {
		if (this.encodeBase64() && !this.output().error) {
			return btoa(this.output().data)
		}
		return this.output().data
	})

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
