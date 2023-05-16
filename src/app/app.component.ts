import { Component } from '@angular/core';
import { FormatterComponent } from '@components/formatter';
import { HeaderComponent } from '@components/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, FormatterComponent],
	host: {
		class: 'flex flex-col h-screen'
	}
})
export class AppComponent {
	protected readonly currentYear = new Date().getFullYear();
}
