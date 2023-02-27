const getValid = str => {
    if (str.length < 2) {
        return 'NO';
    }
    const withNumber = !isNaN(Number(str[0])) || !isNaN(Number(str[1]));
    if(withNumber)
        return 'YES';
    return 'NO'
}

console.log(getValid('2b'));
console.log(getValid('d2'));
console.log(getValid('33'));
console.log(getValid('bb'));
console.log(getValid('b'));
console.log(getValid(''));