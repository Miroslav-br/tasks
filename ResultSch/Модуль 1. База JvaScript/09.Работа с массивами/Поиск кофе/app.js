//Проверка наличия кофе и повышение цены
const coffees = ['Latte', 'Cappuccino', 'Americano']
const newCoffees = coffees.map((name) => name.toLowerCase())

const prices = [1.5, 1, 2];
const updatePrices = prices.map((oldPricce) => oldPricce + 0.5)
coffees.forEach((nameOfCOffee,index) => console.log(`“Кофе ${nameOfCOffee} сейчас стоит ${updatePrices[index]}
евро`))

coffeeName = prompt("Поиск кофе по названию")
const poositionOfCoffee = newCoffees.indexOf(coffeeName.toLowerCase())
if( poositionOfCoffee != -1) {
    alert(`Держите ваш любимый кофе ${coffees[poositionOfCoffee]}. Он ${poositionOfCoffee}-й по популярности в
        нашей кофейне`)
}else {
    alert('К сожалению,такого вида кофе нет в наличии')
}

// Система оценок работы кофейни

let clientEstimations = []
let askClientToGiveEstimation

for(let i = 0; i < 5; i++){
    askClientToGiveEstimation = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`))
    if(askClientToGiveEstimation){
       clientEstimations.push(askClientToGiveEstimation) 
    }
}
const goodEstimations = clientEstimations.filter(estimation => estimation > 5)
const badEstimations = clientEstimations.filter(estimation => estimation <= 5)
alert(`Положительных оценок ${goodEstimations.length}`)
alert(`Отрицательных оценок ${badEstimations.length}`)
