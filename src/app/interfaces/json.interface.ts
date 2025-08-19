export const indentSizes = [1, 2, 4, 6, 8] as const

export type IndentSize = (typeof indentSizes)[number]

export const indentTypes = ['Spaces', 'Tabs'] as const

export type IndentType = (typeof indentTypes)[number]

export interface Indent {
	size: IndentSize
	type: IndentType
}

export const formats = ['json', 'plain'] as const

export type Format = (typeof formats)[number]
