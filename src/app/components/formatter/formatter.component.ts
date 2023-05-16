import { NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ToolbarComponent } from '@components/toolbar';
import copy from '@func/copy';
import download from '@func/download';
import { formatJson } from '@func/format-json';
import { isEqual } from '@func/is-equal';
import { Indent, IndentSize, IndentType } from '@interfaces/json.interface';

@Component({
	selector: 'app-formatter',
	templateUrl: './formatter.component.html',
	standalone: true,
	imports: [NgIf, ToolbarComponent],
})
export class FormatterComponent {
	private readonly indentType = signal<IndentType>('Spaces', { equal: isEqual });

	protected readonly indentSize = signal<IndentSize>(2, { equal: isEqual });

	protected readonly input = signal('');

	protected readonly output = computed(() => formatJson(this.input(), this.indentType(), this.indentSize()))

	protected transform(event: Event): void {
		const target = event.target as HTMLTextAreaElement
		this.input.set(target.value)
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
}

