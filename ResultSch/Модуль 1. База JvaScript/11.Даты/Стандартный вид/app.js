const currentDate = new Date()
const addZero = (number) => {
    if(String(number).length === 1){
        return `0${number}`
    }
    return number
}
console.log('Дата', getDateFormat(currentDate, '.'))

function getDateFormat (dateTime, separator){
    let updatedDateTime = ''
    const arrDate = [
        dateTime.getDate(),
        dateTime.getMonth() + 1,
        dateTime.getFullYear(),
    ]
    arrDate[0] = addZero(arrDate[0])
    arrDate[1] = addZero(arrDate[1])
    return arrDate.join(separator)
}