import { Component, HostListener } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [NgxBootstrapIconsModule, RouterLink],
	host: {
		class: 'flex relative p-4 items-center justify-between',
	},
})
export class HeaderComponent {
	readonly githubUrl = 'https://github.com/AlexAtHome/json'

	protected isOffline = !navigator.onLine

	@HostListener('window:online')
	protected setOnlineMode(): void {
		this.isOffline = false
	}

	@HostListener('window:offline')
	protected setOfflineMode(): void {
		this.isOffline = true
	}
}
