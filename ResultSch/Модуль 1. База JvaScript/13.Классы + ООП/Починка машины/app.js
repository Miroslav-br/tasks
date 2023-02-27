class AutoService {
    static defaultWorkingTIme = {
        from: '9:00',
        till: '22:00',
    }
    #name
    #workingHours
    constructor (name, workingHours = AutoService.defaultWorkingTIme){
        this.#name  = name
        this.#workingHours = Object.values(workingHours).map((values) =>{
                const numToWorking = values.split(':')
                return numToWorking[0]
        }) 
    }

    #checkWorkingHours() {
        const arrHours = Object.values(this.#workingHours)
        const currentHour = new Date().getHours()
        if (arrHours[0] < currentHour < arrHours[1]){
            return true
        }
        return false
    }
    
    repairCar(carName) {
        
        if(!carName){
            console.error('Вам необходимо указать название машины')
            return
        }
        else if(this.#checkWorkingHours){
            console.log(`Вас приветсвует ${this.#name}. Машина ${carName} Будет готова через некоторе время`)
            return
        }
        console.log("Извините, но в данное время сервис не работает")

    }
    
}

const carService = new AutoService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');