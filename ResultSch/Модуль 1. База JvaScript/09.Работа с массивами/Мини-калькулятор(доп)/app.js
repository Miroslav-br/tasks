let inputExpressionFromUser = prompt('Введите число, символ, число ; через запятую ').replace(' ','').split(',')
const symbols = ['>','<','=','+','*','/','-']
const searching = (inputExpressionFromUser.length === 3 && symbols.includes(inputExpressionFromUser[1]) &&(Number(inputExpressionFromUser[0]) && Number(inputExpressionFromUser[2]))? true: false)
inputExpressionFromUser[0] = Number(inputExpressionFromUser[0])
inputExpressionFromUser[2] = Number(inputExpressionFromUser[2])

alert(getMathResult(inputExpressionFromUser,searching))

function getMathResult (expression,searchingTrue){
    if(!searchingTrue){
        alert("Ошибка")
        return
    }

    switch (expression[1]) {
        case '+':
            return expression[0]+expression[2]
        case '-':
            return expression[0]-expression[2]
        case '*':
            return expression[0]*expression[2]
        case '/':
            return expression[0]/expression[2]
        case '=':
            return expression[0]==expression[2]
        case '<':
            return expression[0]<expression[2];
        case '>':
            return expression[0]>expression[2]
    }

}