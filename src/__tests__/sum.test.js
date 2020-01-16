// const sum = require('../utils/sum.js');
import sum from '../utils/sum.js'

describe.skip('SUM', () => {
	it('adds 10 + 20 to equal 30', () => {
		expect(sum(10, 20)).toBe(30);
	});
});
