import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormatterComponent } from './formatter.component'
import { OutputToolbarComponent } from '@components/output-toolbar'
import {
	NgxBootstrapIconsModule,
	clipboard,
	codeSlash,
	download,
	indent,
	textIndentLeft,
	trash,
} from 'ngx-bootstrap-icons'

describe(FormatterComponent.name, () => {
	let component: FormatterComponent
	let fixture: ComponentFixture<FormatterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				FormatterComponent,
				OutputToolbarComponent,
				NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download, trash, codeSlash }),
			],
		}).compileComponents()

		fixture = TestBed.createComponent(FormatterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should decode a string before converting to json', () => {
		fixture.componentRef.setInput('decodeBase64', true)
		component.indentType.set('Tabs')
		const foo = { foo: 'bar' }
		const expected = JSON.stringify(foo, null, '\t')

		fixture.componentRef.setInput('input', 'eyJmb28iOiJiYXIifQ==')

		expect(component.output().data).toBe(expected)
	})

	describe('when the json is invalid', () => {
		it('contains the error text', () => {
			fixture.componentRef.setInput('input', '{invalidjsonhere')
			expect(component.output().error).toBeTruthy()
		})

		it('does not prettify the output', () => {
			const input = '{foo:bar'
			fixture.componentRef.setInput('input', input)
			expect(component.output().data).toBe(input)
		})
	})

	it('should trim a plain text', () => {
		fixture.componentRef.setInput('format', 'plain')
		fixture.componentRef.setInput('input', '   untrimmed     text    ')
		expect(component.output().data).toBe('untrimmed     text')
	})
})
