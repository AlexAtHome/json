import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderComponent } from './header.component'
import { NgxBootstrapIconsModule, github } from 'ngx-bootstrap-icons'
import { RouterTestingModule } from '@angular/router/testing'

describe('HeaderComponent', () => {
	let component: HeaderComponent
	let fixture: ComponentFixture<HeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, HeaderComponent, NgxBootstrapIconsModule.pick({ github })],
			providers: [],
		}).compileComponents()

		fixture = TestBed.createComponent(HeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
