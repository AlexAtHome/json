import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { InputToolbarComponent } from '@components/input-toolbar/input-toolbar.component'
import { OutputToolbarComponent } from '@components/output-toolbar'
import copy from '@func/copy'
import download from '@func/download'
import { formatJson, FormatJsonOutput } from '@func/format-json'
import { isEqual } from '@func/is-equal'
import type { IndentSize, IndentType } from '@interfaces/json.interface'

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
	protected readonly format = signal('json')

	protected readonly decodedValue = computed(() => {
		if (this.decodeBase64()) {
			return atob(this.input())
		} else {
			return this.input().trim()
		}
	})

	readonly output = computed(() => {
		if (this.format() === 'json') {
			return this.getJsonOutput()
		} else {
			return this.getXmlOutput()
		}
	})

	private readonly domParser = new DOMParser()
	private readonly xslt = this.getXSLTProcessor()

	private getJsonOutput(): FormatJsonOutput {
		try {
			const size = Number(this.indentSize()) as IndentSize
			// TODO: Fix the select component so it returns a number when it's passed a list of numbers
			return formatJson(this.decodedValue(), this.indentType(), size)
		} catch (e) {
			return {
				data: this.input().trim(),
				error: (e as Error).message,
			}
		}
	}

	getXmlOutput(): FormatJsonOutput {
		if (!this.decodedValue().trim()) {
			return {
				data: '',
			}
		}
		const serializer = new XMLSerializer()
		const node = this.domParser.parseFromString(this.decodedValue(), 'text/xml')
		const formattedNode = serializer.serializeToString(node)
		console.log(formattedNode)

		// const cloneNode = node.cloneNode(true)
		// xmlRef.appendChild(cloneNode)
		// const fragment = this.xslt.transformToFragment(cloneNode, xmlRef)
		// console.log(fragment)
		// const child = fragment.children[0]
		// if (child.localName === 'parsererror') {
		// 	return {
		// 		data: this.decodedValue(),
		// 		error: fragment.children[0].textContent ?? undefined,
		// 	}
		// }
		// console.log(fragment)
		return {
			data: '',
		}
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

	private getXSLTProcessor(): XSLTProcessor {
		const xsltProcessor = new XSLTProcessor()
		const xslt = `
			<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
				<xsl:output omit-xml-declaration="yes" indent="yes"/>
				<xsl:template match="node()|@*">
					<xsl:copy>
						<xsl:apply-templates select="node()|@*"/>
					</xsl:copy>
				</xsl:template>
			</xsl:stylesheet>
		`
		const xslStylesheet = this.domParser.parseFromString(xslt, 'application/xml')
		xsltProcessor.importStylesheet(xslStylesheet)
		return xsltProcessor
	}
}
