import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormatterComponent } from './formatter.component'
import { ToolbarComponent } from '@components/toolbar'
import { NgIf } from '@angular/common'
import { NgxBootstrapIconsModule, clipboard, download, indent, textIndentLeft } from 'ngx-bootstrap-icons'

describe('FormatterComponent', () => {
	let component: FormatterComponent
	let fixture: ComponentFixture<FormatterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				FormatterComponent,
				ToolbarComponent,
				NgIf,
				NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download }),
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
