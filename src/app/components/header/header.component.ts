import { Component } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
	imports: [NgxBootstrapIconsModule],
	host: {
		class: 'flex relative p-2 sm:p-4 items-center justify-between'
	}
})
export class HeaderComponent {
	readonly githubUrl = 'https://github.com/AlexAtHome/json'
}
