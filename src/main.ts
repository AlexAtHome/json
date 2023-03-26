import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { clipboard, indent, textIndentLeft, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

bootstrapApplication(AppComponent, {
	providers: [importProvidersFrom(BrowserModule, NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft }))]
})
	.catch(err => console.error(err));
