import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer';
import { HeaderComponent } from '@components/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
	host: {
		class: 'flex flex-col h-screen'
	}
})
export class AppComponent {}
