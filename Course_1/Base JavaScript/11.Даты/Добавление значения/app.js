const addDay = (day = 1) => day * 24 * 60 * 60 * 1000
const newDate = new Date(Date.now() + addDay(50))
console.log(newDate)