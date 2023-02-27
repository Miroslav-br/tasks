const groceries = {
    "Orange Juice": {
    price : 1.5,
    discount: 10,
    },
    "Chocolate": {
    price : 2,
    discount : 0,
    },
}
const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);

function getTotalPriceOfShoppingBag(shoppingBag){
    let totalPriceOfShoppingBag = 0
    shoppingBag.forEach(element => {
        let discount = groceries[element.product]['price'] * groceries[element.product]['discount'] / 100
        totalPriceOfShoppingBag += (groceries[element.product]['price'] - discount) * element.quantity
    })

    

    return totalPriceOfShoppingBag.toFixed(2)
}

console.log('totalPrice', totalPrice);