import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
	host: {
		class: 'flex flex-col h-screen'
	}
})
export class AppComponent {
	protected readonly currentYear = new Date().getFullYear();
}
