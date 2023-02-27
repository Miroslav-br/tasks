
const clientName = prompt("Введите ваше имя")
let clientSpentForAllTime = Number(prompt('Сколько было потрачено за весь период'))
const priceOfCurentPurchase = Number(prompt('Цена текущей покупки'))

if(clientSpentForAllTime && priceOfCurentPurchase ) {
    const discount = clientSpentForAllTime > 100 ? 10: clientSpentForAllTime > 300 ? 20 : clientSpentForAllTime > 500 ? 30 : 0
    const clientSpentToday = priceOfCurentPurchase - (priceOfCurentPurchase * (discount/100))
   
    alert(`Ваша скидка= ${discount}%`)
    alert(`Спасибо ${clientName}. К оплате ${clientSpentToday}\n
    За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}`)
}else {
    alert('Сумма,которую клиент потратил за все время и которую потратил сегодня, должна быть числом! '
    +'Перезагрузите страницу, чтобы повторить попытку')
}
