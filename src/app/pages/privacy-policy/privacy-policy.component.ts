import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-privacy-policy',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './privacy-policy.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrivacyPolicyComponent implements OnInit {
	@Input() foo = ''
	bar = ''
	@HostBinding('attr.class') readonly className = 'p-4 flex-grow max-w-3xl gap-4 flex flex-col text-lg'
	@HostBinding('attr.role') readonly role = 'article'
	@HostBinding('attr.aria-labelledby') readonly ariaLabelledBy = 'privacy-policy'

	readonly lastUpdated = new Date('05/20/2023')

	ngOnInit(): void {
		if (this.foo) {
			this.bar = 'bar'
		} else {
			this.bar = 'nuh huh'
		}
	}
}
