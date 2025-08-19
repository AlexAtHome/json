import copy from './copy'

test('copy() copies the passed attribute', async () => {
	Object.assign(navigator, {
		clipboard: {
			writeText: vi.fn(),
		},
	})

	await copy('test')
	expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test')
})
