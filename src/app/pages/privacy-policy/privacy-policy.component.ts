import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './privacy-policy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'p-4 flex-grow max-w-3xl gap-4 flex flex-col text-lg'
	}
})
export default class PrivacyPolicyComponent {
	readonly lastUpdated = new Date('05/20/2023')
}
