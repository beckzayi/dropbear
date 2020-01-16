import { pop } from './utilities';
import { isOpeningParenthesis, isClosingParenthesis } from './utils/identify';

const parse = tokens => {
    let result = {};

    var obj = pop(tokens);

    const { type, value } = obj;

    if (type === 'Number') {
        result = {
            type: 'NumericLiteral',
            value: value
        }
    }

    if (type === 'String') {
        result = {
            type: 'StringLiteral',
            value: value
        }
    }

    if (type === 'Name') {
        result = {
            type: 'Identifier',
            name: value
        }
    }

    if (type === 'Parenthesis') {
        let i = parse(tokens);
        result.type = 'CallExpression';

        if (i.type === 'Identifier') {
            result.name = i.value;
        } else {
            result.arguments.push(i);
        }
    }

    return result;
};

const parenthesize = (tokens) => {
    const token = pop(tokens);

    if (isOpeningParenthesis(token.value)) {
        const expression = [];
        while(!isClosingParenthesis(token.value)) {
            expression.push(token);
        }
        pop(tokens);
        return expression;
    }
};

export default parse;
