import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormatterComponent } from './components/formatter/formatter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, FormatterComponent]
})
export class AppComponent {
}
