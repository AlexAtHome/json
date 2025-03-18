import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router'
import { SwUpdate } from '@angular/service-worker'
import { filter } from 'rxjs'

@Component({
	selector: 'app-footer',
	imports: [RouterLink],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'flex justify-between items-center text-black dark:text-white font-sans p-4',
	},
})
export class FooterComponent {
	protected readonly currentYear = new Date().getFullYear()

	protected readonly isUpdateButtonVisible = signal(false)

	constructor(private readonly swUpdate: SwUpdate) {
		swUpdate.versionUpdates
			.pipe(
				filter((event) => event.type === 'VERSION_READY'),
				takeUntilDestroyed()
			)
			.subscribe(() => {
				this.isUpdateButtonVisible.set(true)
			})
	}

	protected async activateUpdate(): Promise<void> {
		try {
			const result = await this.swUpdate.activateUpdate()
			if (result) {
				location.reload()
			}
		} catch (error) {
			console.error(error)
		}
	}
}
