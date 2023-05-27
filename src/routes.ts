import { Routes } from '@angular/router'
import { FormatterComponent } from '@pages/formatter'

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: FormatterComponent,
	},
	{
		path: 'privacy-policy',
		loadComponent: () => import('./app/pages/privacy-policy/privacy-policy.component'),
	},
]
