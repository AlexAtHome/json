import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	@HostBinding('class') readonly className =
		'flex justify-between items-center text-black dark:text-white font-sans p-4'
	protected readonly currentYear = new Date().getFullYear()
}
