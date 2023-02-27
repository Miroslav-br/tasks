const number = Number(prompt("Введите число"))
const type = prompt("Введите какие число складывать odd,even или все(пустая строка)").toLowerCase()

const sumNotAll = (number,startCycle = 1) => {
    let result = 0
    for(let i = startCycle;i <= number;i += 2){
        result += i
    }
    return result
}

switch (type) {
    case 'odd':
        alert(`Сумма четных чисел = ${sumNotAll(number,2)}`)
        break
    case 'even':
        alert(`Сумма нечетных чисел = ${sumNotAll(number,1)}`)
        break
    default:
        alert(`Сумма чисел = ${sumAll(number)}`)
        break
}


function sumAll(number) {
    let result = 0
    for(let i = 1;i <= number;i++){
        result += i
    }
    return result
}