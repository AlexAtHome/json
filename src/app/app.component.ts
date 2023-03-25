import { Component } from '@angular/core';
import { FormatterComponent } from '@components/formatter';
import { HeaderComponent } from '@components/header';
import { clipboard } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FormatterComponent],
})
export class AppComponent {
}
