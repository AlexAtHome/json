import { isEqual } from './is-equal'

describe('isEqual()', () => {
	it('returns true when arguments are equal', () => {
		expect(isEqual(2, 2)).toBeTrue()
	})

	it('returns false when arguments are not equal', () => {
		expect(isEqual(2, 3)).toBeFalse()
	})
})
