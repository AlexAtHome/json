import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from, map, Observable, switchMap, take } from 'rxjs';
import { IndentSize, IndentType } from './json.interface';

@Injectable({ providedIn: 'root' })
export class JsonService {
	private readonly rawInputSubject = new BehaviorSubject<string>('')

	private readonly indentSizeSubject = new BehaviorSubject<IndentSize>(2)

	private readonly indentTypeSubject = new BehaviorSubject<IndentType>('Spaces')

	public readonly output$ = combineLatest([
		this.rawInputSubject,
		this.indentSizeSubject,
		this.indentTypeSubject,
	]).pipe(
		map(([rawInput, indent, type]) => this.transform(rawInput, type === 'Tabs' ? '\t' : indent))
	);

	public readonly indentSize$ = this.indentSizeSubject.asObservable()

	private transform(value: string, indent: IndentSize | '\t'): string {
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

	setIndentSize(value: IndentSize): void {
		this.indentSizeSubject.next(value)
	}

	setIndentType(value: IndentType) {
		this.indentTypeSubject.next(value)
	}

	setRawInput(value: string): void {
		this.rawInputSubject.next(value)
	}

	copyOutput(): Observable<void> {
		return this.output$.pipe(
			take(1),
			switchMap(output => from(navigator.clipboard.writeText(output)))
		)
	}
}

