import download from './download'

xdescribe('download()', () => {
	it('downloads a json file', () => {
		let done = false
		spyOn(document, 'createElement').and.returnValue({
			href: '',
			target: '',
			click() {
				done = true
			},
		} as unknown as HTMLElement)
		download('{ "foo": "bar" }')
		expect(done).toEqual(true)
	})
})
