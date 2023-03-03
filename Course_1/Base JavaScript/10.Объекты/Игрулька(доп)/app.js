console.log(asf)

const hero = {
    name: 'Batman',
    health: 100,
}
    const enemy = {
    name: 'Joker',
    health: 100,
}
startGame(hero,enemy)

//Реализация

function HeatEnemy(enemy){enemy.health -= 10}
function HeatHero(hero){hero.health -= 10}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    

function startGame(hero, enemy){
    while (hero.health > 0 && enemy.health > 0){
        let attack = getRandomNumberInRange(0,1)
        if(attack){
            HeatEnemy(enemy)
        }else{
            HeatHero(hero)      
        }
    }
}

enemy.health ? console.log(`Победил ${hero.name}`): console.log(`Победил ${enemy.name}`)