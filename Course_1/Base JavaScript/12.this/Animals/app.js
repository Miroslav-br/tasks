const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}    

const makeDomestic = function(isDomestic = false) {
    this["isDomestic"] = isDomestic
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}
    Оно домашнее - ${this.isDomestic}`)
}

makeDomestic.call(bird)
makeDomestic.apply(bird, [true])
makeDomestic.bind(dog)(true)