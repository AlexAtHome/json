import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'flex justify-between items-center text-black dark:text-white font-sans p-4'
	}
})
export class FooterComponent {
	protected readonly currentYear = new Date().getFullYear();
}
