import { IndentSize, IndentType } from '@interfaces/json.interface'

export interface FormatJsonOutput {
	data: string
	error?: string
}

export const formatJson = (value: string, indentType: IndentType, indentSize: IndentSize): FormatJsonOutput => {
	let data = ''
	let error = ''

	if (!value) {
		return { data, error }
	}

	data = JSON.stringify(JSON.parse(value), null, indentType === 'Tabs' ? '\t' : indentSize)
	error = ''

	return { data, error }
}
