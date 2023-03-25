import { Component } from '@angular/core';
import { FormatterComponent } from '@components/formatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormatterComponent]
})
export class AppComponent {
}
