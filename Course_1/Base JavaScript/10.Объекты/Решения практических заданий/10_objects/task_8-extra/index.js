const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
    const applicationNumbers = Object.keys(winnerApplicants);
    const winnerIndex = getRandomNumberInRange(0, applicationNumbers.length);
    const winnerNumber = applicationNumbers[winnerIndex];
    const winnerPerson = applicants[winnerNumber];

    return {
        ...winnerObject,
        ...winnerPerson,
    };
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
