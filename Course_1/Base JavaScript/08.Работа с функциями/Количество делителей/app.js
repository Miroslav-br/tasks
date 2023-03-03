const number = 30
const GetDivisionCount = (number = 1) => {
    let divisions= `Делители = `
    for (let i = 0; i <= number; i++) {
        if(number % i == 0){
            divisions += ` ${i}`
        }
    }
    return divisions
}
const result = GetDivisionCount(number)
console.log(result)