import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormatterComponent } from './formatter.component'
import { OutputToolbarComponent } from '@components/output-toolbar'
import { NgxBootstrapIconsModule, clipboard, download, indent, textIndentLeft, trash } from 'ngx-bootstrap-icons'

describe(FormatterComponent.name, () => {
	let component: FormatterComponent
	let fixture: ComponentFixture<FormatterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				FormatterComponent,
				OutputToolbarComponent,
				NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download, trash }),
			],
		}).compileComponents()

		fixture = TestBed.createComponent(FormatterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
