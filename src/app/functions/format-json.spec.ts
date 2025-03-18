import { formatJson } from './format-json'

describe(formatJson.name, () => {
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
})
