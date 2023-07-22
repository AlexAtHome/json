import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ToolbarComponent } from './toolbar.component'
import { NgxBootstrapIconsModule, clipboard, download, indent, textIndentLeft } from 'ngx-bootstrap-icons'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '@components/button'
import { saveIndent } from '@func/storage'

describe('ToolbarComponent', () => {
	let component: ToolbarComponent
	let fixture: ComponentFixture<ToolbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ToolbarComponent,
				NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download }),
				ButtonComponent,
				FormsModule,
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	afterEach(() => {
		localStorage.clear()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should restore indent settings', () => {
		saveIndent({
			size: 4,
			type: 'Tabs',
		})
		fixture = TestBed.createComponent(ToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()

		expect(component.indentSize).toEqual(4)
		expect(component.indentType).toEqual('Tabs')
	})

	it('should emit the new indent settings', () => {
		component.indentType = 'Spaces'
		component.indentSize = 8
		spyOn(component.indentChange, 'emit')
		component.setIndent()
		expect(component.indentChange.emit).toHaveBeenCalledWith({ size: 8, type: 'Spaces' })
	})

	it('should save settings to the local storage', () => {
		component.indentType = 'Tabs'
		component.indentSize = 4
		component.setIndent()
		expect(localStorage.getItem('indent')).toEqual('{"size":4,"type":"Tabs"}')
	})

	it('should send the copy signal', () => {
		spyOn(component.copyClick, 'emit')
		component.copyOutput()
		expect(component.copyClick.emit).toHaveBeenCalled()
	})

	it('should send the download signal', () => {
		spyOn(component.downloadClick, 'emit')
		component.downloadOutput()
		expect(component.downloadClick.emit).toHaveBeenCalled()
	})

	it('should send the reset signal', () => {
		spyOn(component.resetClick, 'emit')
		component.reset()
		expect(component.resetClick.emit).toHaveBeenCalled()
	})
})
