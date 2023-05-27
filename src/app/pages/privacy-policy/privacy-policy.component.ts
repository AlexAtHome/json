import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
	selector: 'app-privacy-policy',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './privacy-policy.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrivacyPolicyComponent {
	@HostBinding('class') readonly className = 'p-4 flex-grow max-w-3xl gap-4 flex flex-col text-lg'
	@HostBinding('attr.role') readonly role = 'article'
	@HostBinding('attr.aria-labelledby') readonly ariaLabelledBy = 'privacy-policy'

	readonly lastUpdated = new Date('05/20/2023')
}
