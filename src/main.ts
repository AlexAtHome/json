import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule),
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				fullLibraryLoader: () => import('highlight.js'),
			}
		}
	]
})
	.catch(err => console.error(err));
