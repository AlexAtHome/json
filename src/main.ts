import { importProvidersFrom, isDevMode } from '@angular/core'
import { AppComponent } from './app/app.component'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import {
	clipboard,
	indent,
	textIndentLeft,
	github,
	download,
	trash,
	NgxBootstrapIconsModule,
} from 'ngx-bootstrap-icons'
import { provideRouter } from '@angular/router'
import { routes } from './routes'
import { provideServiceWorker } from '@angular/service-worker'

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, github, download, trash })
		),
		provideRouter(routes),
		provideServiceWorker('ngsw-worker.js', {
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
}).catch((err) => console.error(err))
