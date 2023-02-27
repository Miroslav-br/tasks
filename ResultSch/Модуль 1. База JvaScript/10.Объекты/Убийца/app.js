getKiller(
    {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
) // Убийца James
    getKiller(
    {
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
    },
    ['Ben']
)

function getKiller (suspectInfo, deadPeople) {
    for(suspectPerson in suspectInfo) {
        const qwe = deadPeople.every((deadName) => suspectInfo[suspectPerson].includes(deadName))
        if(qwe) {return suspectPerson}
    }
}