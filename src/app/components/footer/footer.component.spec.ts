import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterComponent } from './footer.component'
import { RouterTestingModule } from '@angular/router/testing'
import { provideServiceWorker } from '@angular/service-worker'

describe('FooterComponent', () => {
	let component: FooterComponent
	let fixture: ComponentFixture<FooterComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, FooterComponent],
			providers: [
				provideServiceWorker('sw-test.js', {
					enabled: false,
				}),
			],
		})
		fixture = TestBed.createComponent(FooterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
