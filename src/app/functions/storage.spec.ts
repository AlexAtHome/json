import { restoreIndent, saveIndent } from './storage'

describe('saveIndent()', () => {
	afterEach(() => {
		localStorage.clear()
	})

	it('saves the indentation settings to the local storage', () => {
		saveIndent({
			size: 4,
			type: 'Tabs',
		})
		expect(localStorage.getItem('indent')).toEqual('{"size":4,"type":"Tabs"}')
	})
})

describe('restoreIndent()', () => {
	afterEach(() => {
		localStorage.clear()
	})

	it('returns null if there is no indent settings saved', () => {
		const output = restoreIndent()
		expect(output).toBeNull()
	})

	it('returns the indent settings', () => {
		const mock = {
			size: 4,
			type: 'Tabs',
		} as const
		saveIndent(mock)
		const output = restoreIndent()
		expect(output?.size).toEqual(mock.size)
		expect(output?.type).toEqual(mock.type)
	})
})
