import { Indent } from '@interfaces/json.interface'

export const saveIndent = (indent: Indent): void => {
	localStorage.setItem('indent', JSON.stringify(indent))
}

export const restoreIndent = (): Indent | null => {
	return JSON.parse(localStorage.getItem('indent') ?? 'null') as Indent
}
