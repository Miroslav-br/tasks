let userString = prompt("Введите произвольную строку").trim()
// const startSliceIndex= Number(prompt("Введите число, с какого символа удалять элементы строчки").trim())
// const endSliceIndex = Number(prompt("Введите число, с какого символа перестать удалять элементы строчки").trim())

// alert(`Результат: ${userString.slice(startSliceIndex,endSliceIndex)}`)

const wordFromText = prompt("Введите слово, до которого нужно удалить символы").trim()
const indexOfWord = userString.indexOf(wordFromText)

alert(userString.slice(0,indexOfWord))
