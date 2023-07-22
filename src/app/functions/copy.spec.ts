import copy from './copy'

xdescribe('copy()', () => {
	it('copies the passed attribute', async () => {
		await copy('test')
		expect(await navigator.clipboard.readText()).toEqual('test')
	})
})
