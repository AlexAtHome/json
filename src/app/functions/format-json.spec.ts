import { formatJson } from './format-json'

describe('format-json()', () => {
	it('prettifies the json with 2-spaces indents', () => {
		const input = '{"foo":"bar"}'
		const expected = `{
  "foo": "bar"
}`
		const output = formatJson(input, 'Spaces', 2)
		expect(output.data).toEqual(expected)
	})

	it('prettifies the valid json without errors', () => {
		const input = '{"foo":"bar"}'
		const expected = `{
	"foo": "bar"
}`
		const output = formatJson(input, 'Tabs', 2)
		expect(output.data).toEqual(expected)
	})

	it('prettifies the json with tab indents with no errors', () => {
		const input = '{"foo":"bar"}'
		const output = formatJson(input, 'Spaces', 2)
		expect(output.error).toBeFalsy()
	})

	describe('when the json is invalid', () => {
		it('contains the error text', () => {
			const output = formatJson('{invalidjsonhere', 'Tabs', 2)
			expect(output.error).toBeTruthy()
		})

		it('does not prettify the output', () => {
			const input = '{foo:bar'
			const output = formatJson(input, 'Tabs', 2)
			expect(output.data).toEqual(input)
		})
	})
})
