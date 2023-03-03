const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: (enemy) => enemy.health -= 10
}

const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: (hero) => hero.health -= 10
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
        const randomHeatIndex = getRandomNumberInRange(0, 1);
        if (randomHeatIndex === 0) {
            heroPlayer.heatEnemy(enemyPlayer);
            if (enemyPlayer.health <= 0) {
                break;
            }
        } else {
            enemyPlayer.heatHero(heroPlayer);
            if (heroPlayer.health <= 0) {
                break;
            }
        }
    }

    if (heroPlayer.health <= 0) {
        alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
    } else {
        alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
    }
}

startGame(hero, enemy);