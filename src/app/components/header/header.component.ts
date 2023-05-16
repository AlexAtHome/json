import { Component } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
	imports: [NgxBootstrapIconsModule],
})
export class HeaderComponent {
	readonly githubUrl = 'https://github.com/AlexAtHome/json'
}
