const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

const getMathResult = (expression) => {
    let resultExpression = [...expression];
    if (expression.length > 3) {
        resultExpression = resultExpression.filter(
            (item) => isNumber(item) || possibleMathSigns.includes(item)
        );
    }
    const firstDigit = Number(resultExpression[0]);
    const secondDigit = Number(resultExpression[resultExpression.length - 1]);
    const mathSign = resultExpression[1];

    if (
        resultExpression.length < 3 ||
        expression.length < 3 ||
        !isNumber(firstDigit) ||
        !isNumber(secondDigit) ||
        !possibleMathSigns.includes(mathSign)
    ) {
        return "Ошибка";
    }

    switch (mathSign) {
        case ">":
            return firstDigit > secondDigit;
        case "<":
            return firstDigit < secondDigit;
        case "=":
            return firstDigit === secondDigit;
        case "+":
            return firstDigit + secondDigit;
        case "-":
            return firstDigit - secondDigit;
        case "*":
            return firstDigit * secondDigit;
        case "/":
            return firstDigit / secondDigit;
        default:
            return "Ошибка";
    }
};

const result = getMathResult(["100", "hello", "javascript", "help200", "+", 4]);
console.log("result", result);
