import { IndentSize, IndentType } from "@interfaces/json.interface";

export interface FormatJsonOutput {
	data: string;
	error?: string;
}

export const formatJson = (value: string, indentType: IndentType, indentSize: IndentSize): FormatJsonOutput => {
	let data = ''
	let error = ''

	if (!value) {
		return { data, error }
	}

	try {
		data = JSON.stringify(
			JSON.parse(value),
			null,
			indentType === 'Tabs' ? '\t' : indentSize
		);
		error = ''
	} catch (err) {
		error = (err as SyntaxError).message
		data = value
	}

	return { data, error }
}

