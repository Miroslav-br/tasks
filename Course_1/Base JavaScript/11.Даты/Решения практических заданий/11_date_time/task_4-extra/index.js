const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];

const allowVisa = (people) => {
    return people.filter((person) => {
        const splittedExpirationDate = person.passportExpiration.split('.');
        const year = splittedExpirationDate[splittedExpirationDate.length - 1];
        const month = splittedExpirationDate[1];
        const date = splittedExpirationDate[0];
        const passportExpirationDate = new Date(year, month - 1, date);
        console.log('passportExpirationDate', passportExpirationDate);
        if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
            return true;
        }

        return false;
    });
};

const result = allowVisa(peopleWithVisa);
console.log('result', result);