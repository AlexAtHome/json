import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OutputToolbarComponent } from './output-toolbar.component'
import { NgxBootstrapIconsModule, clipboard, download, indent, textIndentLeft, trash } from 'ngx-bootstrap-icons'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '@components/button'
import { saveIndent } from '@func/storage'

describe(OutputToolbarComponent.name, () => {
	let component: OutputToolbarComponent
	let fixture: ComponentFixture<OutputToolbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				OutputToolbarComponent,
				NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download, trash }),
				ButtonComponent,
				FormsModule,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(OutputToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	afterEach(() => {
		localStorage.clear()
		jest.restoreAllMocks()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should restore indent settings', () => {
		saveIndent({
			size: 4,
			type: 'Tabs',
		})
		fixture = TestBed.createComponent(OutputToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()

		expect(component.indentSize()).toEqual(4)
		expect(component.indentType()).toEqual('Tabs')
	})

	it('should save settings to the local storage', () => {
		fixture.componentRef.setInput('indentType', 'Tabs')
		fixture.componentRef.setInput('indentSize', 4)
		component.saveIndent()
		expect(localStorage.getItem('indent')).toEqual('{"size":4,"type":"Tabs"}')
	})

	it('should send the copy signal', () => {
		jest.spyOn(component.copyClick, 'emit')
		component.copyOutput()
		expect(component.copyClick.emit).toHaveBeenCalled()
	})

	it('should send the download signal', () => {
		jest.spyOn(component.downloadClick, 'emit')
		component.downloadOutput()
		expect(component.downloadClick.emit).toHaveBeenCalled()
	})

	it('should send the reset signal', () => {
		jest.spyOn(component.resetClick, 'emit')
		component.reset()
		expect(component.resetClick.emit).toHaveBeenCalled()
	})
})
