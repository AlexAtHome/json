import { isEqual } from './is-equal'

describe('isEqual()', () => {
	it('returns true when arguments are equal', () => {
		expect(isEqual(2, 2)).toEqual(true)
	})

	it('returns false when arguments are not equal', () => {
		expect(isEqual(2, 3)).toEqual(false)
	})
})
