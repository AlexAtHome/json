import { Component, HostBinding, HostListener } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [NgxBootstrapIconsModule, RouterLink],
})
export class HeaderComponent {
	@HostBinding('attr.class') readonly className = 'flex relative p-4 items-center justify-between'
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
