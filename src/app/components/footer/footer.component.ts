import { NgIf } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, HostBinding, OnInit, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { distinctUntilKeyChanged, filter, fromEvent, iif, interval, retry, switchMap, take, timer } from 'rxjs'
import { environment } from 'src/environments/environment'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink, NgIf, HttpClientModule],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
	@HostBinding('class') readonly className =
		'flex gap-4 justify-between items-center p-4 font-sans text-black dark:text-white'
	protected readonly currentYear = new Date().getFullYear()
	protected readonly version = environment.version
	protected readonly isUpdateAvailable = signal(false)

	constructor(private readonly http: HttpClient) {}

	ngOnInit(): void {
		const delay = 5000
		interval(delay)
			.pipe(
				switchMap(() => this.http.get<typeof environment>('/version.json')),
				distinctUntilKeyChanged('version'),
				filter((response) => response.version !== this.version),
				retry({
					delay: () =>
						iif(() => navigator.onLine, timer(delay), fromEvent(window, 'online', { once: true })).pipe(take(1)),
				})
			)
			.subscribe(() => {
				this.isUpdateAvailable.set(true)
			})
	}

	reload(): void {
		location.reload()
	}
}
