const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

const isOpeningParenthesis = ch => ch === '(';

const isClosingParenthesis = ch => ch === ')';

const isOperator = ch => OPERATORS.includes(ch);


// const isLetter = (input) => {
// 	return /\w/.test(input);
// };
const isLetter = input => LETTER.test(input);

// const isWhitespace = (input) => {
// 	return /\s/.test(input);
// };
const isWhitespace = input => WHITESPACE.test(input);

// const isNumber = (input) => {
// 	return /\d+/.test(input);
// };
const isNumber = input => NUMBER.test(input);

const isParenthesis = (input) => {
	return isOpeningParenthesis(input) || isClosingParenthesis(input);
};

const isQuote = (input) => {
	return input === '"';
};



export { isLetter, isWhitespace, isNumber, isParenthesis, isQuote, isOpeningParenthesis, isClosingParenthesis };
