const password = prompt("Введите пароль не менее 3х символов, с хотя бы одной строчной буквой и хотя бы одной цифрой")
const searchUpperLetter = function(password) {
    for (let element of password){
        if(element >= 'A' && element <= 'Z'){
            return true
        } 
    }
}
const searchNumber = function(password) {
    for (let element of password){
        if(element >= '0' && element <= '9'){
            return true
        } 
    }
}
const includeUpperLetter = searchUpperLetter(password)
let includeNumber = searchNumber(password)

if(includeNumber && includeUpperLetter){
    alert("Пароль валидный, добро пожаловать в аккаунт")
}else{
    alert('Пароль не удовлетворяет условиям! Перезагрузите  страницу и попробуйте ввести его еще раз')
}
      