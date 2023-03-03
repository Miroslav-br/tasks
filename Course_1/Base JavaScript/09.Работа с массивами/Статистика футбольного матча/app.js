const goals = [8, 1, 1, 3, 2, -1, 5]
const sortGoals = goals.sort((a,b) => a-b) //Отсортированный массивы

//Самый результативный матч

const goalsOfBestGame = getMaxOfArray(goals)
function getMaxOfArray(goals) {
    return Math.max.apply(null, goals);
  }

const numberOfBestGame = goals.indexOf(goalsOfBestGame)
console.log(`Самый результативный матч был под номером ${numberOfBestGame + 1}. В
нем было забито ${goalsOfBestGame} гол(ов)`)

//Самые не результативные матчи

const numbersOfBadGames = []
goals.forEach((element,index) => {
    if(element == 1){
         numbersOfBadGames.push(index)
    }
})

console.log(`“Самые нерезультативные матчи были под номерами ${numbersOfBadGames.map(element => element+1)}. В каждом из них
было забито по ${goals.filter(value => value == goals[1])} мячу(а)`)

//Общее, среднее не стал считать, ну и автоматические поражения не стоит искать,
// и так понятно, что нужно найти первый -1 и всё
