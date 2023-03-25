import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat',
  standalone: true,
})
export class JsonFormatPipe implements PipeTransform {
  transform(value: string, indent: number | '\t' = 2): string {
    try {
			return JSON.stringify(
				JSON.parse(value),
				null,
				indent
			);
		} catch {
			return value;
		}
  }
}
