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

function getKiller(suspectInfo, deadPeople) {
    let killerName = '';
    let faf = Object.entries(suspectInfo)
    Object.entries(suspectInfo).forEach((data) => {
        const suspectPerson = data[0];
        const peopleWereSeen = data[1];
        const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName));
        if (isKiller) {
            killerName = suspectPerson;
        }
    })
    
    return killerName;
}
