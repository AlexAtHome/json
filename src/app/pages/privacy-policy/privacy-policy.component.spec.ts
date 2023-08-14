import { provideRouter, withComponentInputBinding } from '@angular/router'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import PrivacyPolicyComponent from './privacy-policy.component'
import { RouterTestingHarness } from '@angular/router/testing'

fdescribe('PrivacyPolicyComponent', () => {
	let component: PrivacyPolicyComponent
	let activatedComponent: PrivacyPolicyComponent
	let fixture: ComponentFixture<PrivacyPolicyComponent>
	let harness: RouterTestingHarness

	const routes = [
		{
			path: 'privacy-policy',
			component: PrivacyPolicyComponent,
		},
	]

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PrivacyPolicyComponent],
			providers: [provideRouter(routes, withComponentInputBinding())],
		})
		fixture = TestBed.createComponent(PrivacyPolicyComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should pass this.foo from query parameter', async () => {
		harness = await RouterTestingHarness.create()
		activatedComponent = await harness.navigateByUrl('/privacy-policy?foo=bar', PrivacyPolicyComponent)
		expect(activatedComponent.foo).toEqual('bar')
	})

	it('should give this.bar a proper value', async () => {
		harness = await RouterTestingHarness.create()
		activatedComponent = await harness.navigateByUrl('/privacy-policy?foo=bar', PrivacyPolicyComponent)
		expect(activatedComponent.bar).toEqual('bar')
	})

	it('should give this.bar no proper value', async () => {
		harness = await RouterTestingHarness.create()
		activatedComponent = await harness.navigateByUrl('/privacy-policy', PrivacyPolicyComponent)
		expect(activatedComponent.bar).toEqual('nuh huh')
	})
})
