const name = 'Мирослав'

GetName1(name)

function GetName1 (name) {
    console.log('Приветствую ',name,' сработала функция 1')
}


const GetName2 = function(name){
    console.log('Приветствую ',name,' сработала функция 2')
}

GetName2(name)

const GetName3 = (name) => {
    console.log('Приветствую ',name,' сработала функция 3')
}

GetName3(name)

