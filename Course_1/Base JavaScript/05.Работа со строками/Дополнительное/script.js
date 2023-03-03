let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений'
console.log(`Изначальная строка: \n${javaScriptDescription}`)
let symbolOnCenter = Math.floor(javaScriptDescription.length / 2)

javaScriptDescription = javaScriptDescription
    .slice(0,symbolOnCenter)
    .replaceAll('а','А')
    .replaceAll(' ','')
    .repeat(3)

console.log(`Конечное решение:\n ${javaScriptDescription}`)

symbolOnCenter = Math.floor(javaScriptDescription.length / 2)
console.log(`\n Символ в центре = ${javaScriptDescription[symbolOnCenter]}`)



