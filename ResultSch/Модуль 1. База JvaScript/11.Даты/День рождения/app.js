const dateOfMyBirthday = new Date(2023,6,5)
console.log("Осталось дней = ", getDaysBeforeBirthday(dateOfMyBirthday))

function getDaysBeforeBirthday (nextBirthday){
    const currentDay = new Date()
    return Math.round((nextBirthday - currentDay)/1000/60/60/24)
}
