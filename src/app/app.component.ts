import { Component, HostBinding } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@components/footer'
import { HeaderComponent } from '@components/header'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: true,
	imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
	@HostBinding('class') readonly className = 'flex flex-col h-screen'
}
