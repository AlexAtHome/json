import { JsonFormatPipe } from './json-format.pipe';

describe('JsonFormatPipe', () => {
	it('create an instance', () => {
		const pipe = new JsonFormatPipe();
		expect(pipe).toBeTruthy();
	});

	it('formats json from a string', () => {
		const pipe = new JsonFormatPipe();
		const input = '{"foo":"bar"}';
		expect(pipe.transform(input)).toEqual(`{
  "foo": "bar"
}`)
	})
});
