const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin: function(defenderObject) {
        let goodProperty = Object.keys(defenderObject).filter(value => Number(value) ? '' :  this[value] > defenderObject[value])
        return [goodProperty.length, 4]
    },
    improveArmy() {
        const namesOfProperties = Object.keys(this).filter(value => typeof(this[value]) != 'function')
        namesOfProperties.map(value => this[value] += 5)
    },
    attackCastle(defender) {
        let chances = this.checkChancesToWin(defender)
        if((chances[0] / chances[1]) < 0.7) {
            console.log(`Коммандир, мы не справимся, силы ${chances[0]} к ${chances[1]},
            нужно усилиться`)
            this.improveArmy()
            this.attackCastle(defender)
        }else {
        console.log(`Шансы есть ${chances[0]} к ${chances[1]}, наступаем`)
        Object.keys(attacker).map(increase => defender[increase] = 0)
        console.log(defender)
        return console.log(`Замок ${defender.name} уничтожен`)
        }
    }
}

const defender = {
    name: 'Turk',
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery : 10,
}
attacker.attackCastle(defender)
