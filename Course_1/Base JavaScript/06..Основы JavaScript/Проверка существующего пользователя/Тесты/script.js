const existedUserLogin = 'thebestuser' 
const existedUserPassword = '12345'

const userLogin = prompt("Введите ваш логин:").trim()
const userPassword = prompt('Введите пароль:').trim()

if(userLogin === existedUserLogin && userPassword === existedUserPassword){
    alert(`Добро пожаловать обратно ${userLogin}`)
}else{
    alert('Вы ввели неправильно логин/пароль')
}