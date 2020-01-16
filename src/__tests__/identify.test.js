import {
	isLetter,
	isWhitespace,
	isNumber,
	isParenthesis,
	isQuote
} from '../utils/identify.js';

describe('IDENTIFY', () => {
	it.skip('isLetter', () => {
		expect(isLetter('a')).toBe(true);
		// expect(isLetter(1)).toBe(false);
		// expect(isLetter('2a')).toBe(false);
		expect(isLetter(' ')).toBe(false);
	});

	it.skip('isNumber', () => {
		expect(isNumber(1)).toBe(true);
		expect(isNumber(2)).toBe(true);
		expect(isNumber(19)).toBe(true);
		//expect(isNumber('2a')).toBe(false);
		expect(isNumber('a')).toBe(false);
	});

	it.skip('isWhitespace', () => {
		expect(isWhitespace(' ')).toBe(true);
		expect(isWhitespace('a')).toBe(false);
		expect(isWhitespace('kk')).toBe(false);
		expect(isWhitespace('  ')).toBe(true);
	})
});
