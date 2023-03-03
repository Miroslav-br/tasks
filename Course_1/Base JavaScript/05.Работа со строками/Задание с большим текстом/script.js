const myName = 'Мирослав'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'хочу'
const numberOfMonth = '1 месяц'

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
${programmingLanguage} ${numberOfMonth}. Я уверен(а), что пройду данный курс до
конца!`

console.log(myInfoText)

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())

console.log('Количество символов в тексте = ', myInfoText.length)
console.log(`Первый символ = ${myInfoText[0]}, последний символ = ${myInfoText[myInfoText.length-1]}`)
console.log(myInfoText)

const userName = prompt('Введите ваше имя:').trim().toLowerCase()
const userAge = Number(prompt("Введите ваш возраст:").trim()) 
alert(`Вас зовут ${userName}, добро пожаловать \nВаш возраст = ${userAge}`)