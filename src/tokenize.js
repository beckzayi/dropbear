import {
	isLetter,
	isWhitespace,
	isNumber,
	isParenthesis,
	isQuote
} from './utils/identify.js';

const tokenize = input => {
    let cursor = 0;
    const tokens = [];

    let token = '';

    while (cursor < input.length) {
        // some logic here

        const character = input[cursor];

        if (isParenthesis(character)) {
            tokens.push({
                type: 'Parenthesis',
                value: character
            });
            cursor++;
            continue;
        }

        if (isWhitespace(character)) {
            cursor++;
            continue;
        }

        if (isNumber(character)) {
            let number = character;
            while(isNumber(input[++cursor])) {
                number += input[cursor];
            }

            tokens.push({
                type: 'Number',
                value: parseInt(number, 10)
            });
            // cursor++;
            continue;
        }

        if (isLetter(character)) {
            let letter = character;
            while(isLetter(input[++cursor])) {
                letter += input[cursor];
            }

            tokens.push({
                type: 'Name',
                value: letter
            });
            // cursor++;
            continue;
        }

        if (isQuote(character)) {
            let str = '';

            while(!isQuote(input[++cursor])) {
                str += input[cursor];
            }

            tokens.push({
                type: 'String',
                value: str
            });

            cursor++;
            continue;
        }
    }

    return tokens;
};

export default tokenize;