import { Routes } from "@angular/router";
import { FormatterComponent } from "@pages/formatter";

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: FormatterComponent
	}
]
