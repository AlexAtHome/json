import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { clipboard, indent, textIndentLeft, github, download, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { provideRouter } from '@angular/router'
import { routes } from './routes'

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, github, download })
		),
		provideRouter(routes),
	],
}).catch((err) => console.error(err))
