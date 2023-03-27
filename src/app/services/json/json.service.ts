import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, from, map, Observable, switchMap, take, tap } from 'rxjs';
import { IndentSize, IndentType } from './json.interface';

@Injectable({ providedIn: 'root' })
export class JsonService {
	private readonly rawInputSubject = new BehaviorSubject<string>('')

	private readonly indentSizeSubject = new BehaviorSubject<IndentSize>(2)

	private readonly indentTypeSubject = new BehaviorSubject<IndentType>('Spaces')

	private readonly errorSubject = new BehaviorSubject<string>('')

	public readonly output$ = combineLatest([
		this.rawInputSubject,
		this.indentSizeSubject,
		this.indentTypeSubject,
	]).pipe(
		map(([rawInput, indent, type]) => this.transform(rawInput, type === 'Tabs' ? '\t' : indent))
	);

	public readonly indentSize$ = this.indentSizeSubject.asObservable()

	public readonly error$ = this.errorSubject.pipe(
		distinctUntilChanged(),
	);

	private transform(value: string, indent: IndentSize | '\t'): string {
		if (!value) {
			return '';
		}
		try {
			const result = JSON.stringify(
				JSON.parse(value),
				null,
				indent
			);
			this.errorSubject.next('')
			return result
		} catch (error) {
			this.errorSubject.next((error as SyntaxError).message)
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

	downloadOutput(): Observable<Blob> {
		return this.output$.pipe(
			take(1),
			map(output => new Blob([output], { type: 'application/json' })),
			tap(blob => {
				const a = document.createElement('a')
				a.href = URL.createObjectURL(blob)
				a.download = `json-${Date.now()}.json`
				a.click()
			})
		)
	}
}

