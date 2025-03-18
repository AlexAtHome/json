import { Component, HostBinding } from '@angular/core'
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router'
import { routeAnimations } from '@animations/route'
import { FooterComponent } from '@components/footer'
import { HeaderComponent } from '@components/header'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [HeaderComponent, FooterComponent, RouterOutlet],
	animations: [routeAnimations],
})
export class AppComponent {
	@HostBinding('class') readonly className = 'flex flex-col h-screen'

	constructor(private readonly contexts: ChildrenOutletContexts) {}

	getRouteAnimation(): string {
		let state = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'] ?? 'none'
		if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
			state += 'Fade'
		}
		return state
	}
}
