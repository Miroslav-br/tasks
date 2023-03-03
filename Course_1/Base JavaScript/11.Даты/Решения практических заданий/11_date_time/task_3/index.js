const convertDaysToMs = (days) => days * 24 * 3600 * 1000

const addDays = (date, days = 1) => {
    return new Date(date.getTime() + convertDaysToMs(days));
}

const date = new Date();
console.log('before', date);
const newDate = addDays(date, 5);
console.log('after', newDate);