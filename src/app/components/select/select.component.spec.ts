import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SelectComponent } from './select.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('SelectComponent', () => {
	let component: SelectComponent<string>
	let fixture: ComponentFixture<SelectComponent<string>>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, SelectComponent],
			providers: [],
		}).compileComponents()

		fixture = TestBed.createComponent<SelectComponent<string>>(SelectComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should register onChange callback', () => {
		component.registerOnChange((value) => {
			console.log(value)
		})
		expect(component.onChange).toBeDefined()
	})

	it('should register onTouched callback', () => {
		component.registerOnTouched((v) => {
			console.log(v)
		})
		expect(component.onTouched).toBeDefined()
	})

	it('should write new values from an Event', () => {
		let value = ''
		component.registerOnChange((v) => {
			value = v
		})
		const fakeEvent = {
			target: {
				value: 'test',
			},
		} as unknown as Event
		component.write(fakeEvent)
		expect(value).toEqual('test')
	})

	it('should write the value', () => {
		component.writeValue('test')
		expect(component.value).toEqual('test')
	})

	it('should disable the component', () => {
		component.setDisabledState(true)
		expect(component.disabled).toEqual(true)
	})

	it('should enable the component', () => {
		component.setDisabledState(false)
		expect(component.disabled).toEqual(false)
	})
})
