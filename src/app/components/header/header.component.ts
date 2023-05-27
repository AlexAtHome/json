import { Component, HostBinding } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	imports: [NgxBootstrapIconsModule, RouterLink],
})
export class HeaderComponent {
	@HostBinding('class') readonly className = 'flex relative p-4 items-center justify-between'
	readonly githubUrl = 'https://github.com/AlexAtHome/json'
}
