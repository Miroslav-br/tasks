function onlyOddDigPrimes(n) {
    arr = Array.from({length: n*5}, (e, i)=> i)
    for (let number = 2; number < Math.round(Math.sqrt(n)); number++){
        for (let index = 0; index < arr.length; index++) {
            if(arr[index] % number == 0 && arr[index] != number )
                arr[index] = 0
        }
    }
    listOfOdd = arr.filter(value => value <= n && value != 0)
    console.log(arr);
    nearNumber = listOfOdd[listOfOdd.length - 1]
    listOfOddLength = [...listOfOdd.join('--').matchAll(/-[13579]+-?/g)].length
    const pureOdd = arr.filter(value => value > 20).join('-').match(/-[13579]+-/)[0].slice(1).replace('-','')
    return [listOfOddLength, nearNumber,+pureOdd]
}

console.log(onlyOddDigPrimes(20));