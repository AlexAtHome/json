import { NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router'
import { SwUpdate } from '@angular/service-worker'
import { filter, tap } from 'rxjs'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterLink, NgIf],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	@HostBinding('attr.class') readonly className =
		'flex justify-between items-center text-black dark:text-white font-sans p-4'
	protected readonly currentYear = new Date().getFullYear()

	protected readonly isUpdateButtonVisible = signal(false)

	constructor(private readonly swUpdate: SwUpdate) {
		swUpdate.versionUpdates
			.pipe(
				tap((event) => {
					switch (event.type) {
						case 'VERSION_DETECTED':
							console.log(`Downloading new app version: ${event.version.hash}`)
							break
						case 'VERSION_READY':
							console.log(`Current app version: ${event.currentVersion.hash}`)
							console.log(`New app version ready for use: ${event.latestVersion.hash}`)
							break
						case 'VERSION_INSTALLATION_FAILED':
							console.log(`Failed to install app version '${event.version.hash}': ${event.error}`)
							break
					}
				}),
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
			console.log(result)
			if (result) {
				location.reload()
			}
		} catch (error) {
			console.error(error)
		}
	}
}
